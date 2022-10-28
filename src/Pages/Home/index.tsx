import { GridProducts, GridTwoColums, HomeContainer, IntroImage } from "./styles"
import { ProductItem } from "./components/ProductItem"
import { Intro } from "./components/Intro"
import banner from '../../assets/bannerHome.png'

export const Home = () => (
  <HomeContainer>
    <GridTwoColums>
      <Intro />

      <IntroImage src={banner} alt="" />
    </GridTwoColums>

    <h1>Nosso cafés</h1>

    <GridProducts>
      <ProductItem />
    </GridProducts>

  </HomeContainer >

)