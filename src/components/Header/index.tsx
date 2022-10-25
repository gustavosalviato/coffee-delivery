import { HeaderContainer } from "./style"
import logo from '../../assets/logo.png'

import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from "react-router-dom"
export const Header = () => {
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
          <ShoppingCart size={24} weight="fill" />
        </NavLink>

      </nav>

    </HeaderContainer >
  )
}