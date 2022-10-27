import { ContainerFlex, GridIcons, GridProducts, GridTwoColums, HomeContainer, IntroContainer, IntroImage } from "./styles"
import banner from '../../assets/bannerHome.png'
import { ProductItem } from "./components/ProductItem"
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react"

export const Home = () => (
  <HomeContainer>
    <GridTwoColums>
      <IntroContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>

        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>


        <GridIcons>
          <ContainerFlex bgColor="yellow-dark">
            <ShoppingCart size={28} weight="fill" />
            <span>Compra simples e segura </span>
          </ContainerFlex>

          <ContainerFlex bgColor="gray">
            <Package size={28} weight="fill" />
            <span>Embalagem mantém o café intacto </span>
          </ContainerFlex>

          <ContainerFlex bgColor="yellow-dark">
            <Timer size={28} weight="fill" />
            <span>Entrega rápida e rastreada </span>
          </ContainerFlex>

          <ContainerFlex bgColor="purple">
            <Coffee size={28} weight="fill" />
            <span>O café chega fresquinho até você</span>
          </ContainerFlex>
        </GridIcons>
      </IntroContainer>

      <IntroImage src={banner} alt="" />
    </GridTwoColums>

    <h1>Nosso cafés</h1>

    <GridProducts>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </GridProducts>

  </HomeContainer >

)