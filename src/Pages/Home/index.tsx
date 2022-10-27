import { GridIcons, GridProducts, GridTwoColums, HomeContainer } from "./styles"

import banner from '../../assets/bannerHome.png'
import coffee from '../../assets/coffeImg.png'
import box from '../../assets/boxImg.png'
import clock from '../../assets/clockImg.png'
import cart from '../../assets/cartImg.png'
import { ProductItem } from "./components/ProductItem"
import { ShoppingCart } from "phosphor-react"

export const Home = () => (
  <HomeContainer>
    <GridTwoColums>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>

        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>


        <GridIcons>
          <ShoppingCart weight="fill" size={32} />
          <span>Compra simples e segura</span>

          <ShoppingCart weight="fill" size={32} />
          <span>Compra simples e segura</span>


          <ShoppingCart weight="fill" size={32} />
          <span>Compra simples e segura</span>


          <ShoppingCart weight="fill" size={32} />
          <span>Compra simples e segura</span>

        </GridIcons>

      </div>

      <img src={banner} alt="" />
    </GridTwoColums>

    <GridProducts>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </GridProducts>

  </HomeContainer >

)