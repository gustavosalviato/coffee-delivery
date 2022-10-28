import { createContext, ReactNode, useContext, useState } from "react";
import { Coffee } from "../Pages/Home/components/ProductItem";

interface CartItem extends Coffee {
    quantity: number
}

interface cartContextType {
    cartItems: CartItem[]
}

export const CartContext = createContext({} as cartContextType)

interface cartContextProviderProps {
    children: ReactNode
}

export const CartContextProvider = ({ children }: cartContextProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    return (
        <CartContext.Provider value={{ cartItems }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext)
