import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Coffee } from "../Pages/Home/components/ProductItem";
import { produce } from 'immer'

const COFFE_ITEMS_STORAGE_KEY = '@coffe-delivery-ignite:1.0.0'

export interface OrderData {
  zipCode: string,
  street: string,
  number: string
  district: string,
  complement: string,
  city: string,
  UF: string,
  payMethods: string;
}

export interface CartItem extends Coffee {
  quantity: number
}

interface cartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  totalCart: number
  order: OrderData
  addProductToCart: (coffee: CartItem) => void
  removeProductToCart: (coffeeId: number) => void
  changeItemQuantity: (coffeeId: number, type: 'increase' | 'decrease') => void
  createOrder: (data: OrderData) => void
}

export const CartContext = createContext({} as cartContextType)

interface cartContextProviderProps {
  children: ReactNode
}

export const CartContextProvider = ({ children }: cartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFE_ITEMS_STORAGE_KEY)

    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }

    return []
  })
  const [order, setOrder] = useState({} as OrderData)

  const cartQuantity = cartItems.length

  const addProductToCart = (coffee: CartItem) => {
    const coffeeAlreadyExists = cartItems.findIndex(cartItem => cartItem.id === coffee.id)

    const newCart = produce(cartItems, (draft) => {

      if (coffeeAlreadyExists < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExists].quantity += coffee.quantity
      }

    })

    setCartItems(newCart)
  }

  const removeProductToCart = (coffeeId: number) => {
    const coffeeAlreadyExists = cartItems.findIndex(cartItem => cartItem.id === coffeeId)

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExists >= 0) {
        draft.splice(coffeeAlreadyExists, 1)
      }
    })

    setCartItems(newCart)
  }

  const changeItemQuantity = (coffeeId: number, type: 'increase' | 'decrease') => {
    const coffeeAlreadyExists = cartItems.findIndex((cartItem) => cartItem.id === coffeeId)

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExists >= 0) {
        if (type == 'increase') {
          draft[coffeeAlreadyExists].quantity = draft[coffeeAlreadyExists].quantity + 1
        }

        if (type == 'decrease') {
          draft[coffeeAlreadyExists].quantity = draft[coffeeAlreadyExists].quantity - 1
        }
      }
    })

    setCartItems(newCart)
  }

  const totalCart = cartItems.reduce((acc, som) => {
    return acc += som.price * som.quantity
  }, 0)

  const createOrder = (data: OrderData) => {
    const newOrder: OrderData = {
      city: data.city,
      complement: data.complement,
      district: data.district,
      number: data.number,
      UF: data.UF,
      zipCode: data.zipCode,
      street: data.street,
      payMethods: data.payMethods

    }

    setOrder(newOrder)
  }


  useEffect(() => {
    localStorage.setItem(COFFE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])


  return (
    <CartContext.Provider value={{
      cartItems,
      cartQuantity,
      addProductToCart,
      removeProductToCart,
      changeItemQuantity,
      createOrder,
      totalCart,
      order
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
