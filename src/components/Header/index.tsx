import { HeaderContainer } from "./style"
import logo from '../../assets/logo.png'

import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from "react-router-dom"
import { useCartContext } from "../../context/cartContext"
export const Header = () => {

  const { cartQuantity } = useCartContext()

  return (
    <HeaderContainer>

      <span>
        <img src={logo} alt="" />
      </span>

      <nav>
        <NavLink to="/checkoutfilled">
          <MapPin size={24} weight="fill" />
          <span>Porto Alegre, RS</span>
        </NavLink>

        <NavLink to="/checkout">
          {cartQuantity >= 1 && <span>{cartQuantity}</span>}
          <ShoppingCart size={24} weight="fill" />
        </NavLink>

      </nav>

    </HeaderContainer >
  )
}