import { GridInfo, HomeContainer, HomeContent, HomeInfo } from "./styles"
import banner from '../../assets/bannerHome.png'
import coffee from '../../assets/coffeImg.png'
import box from '../../assets/boxImg.png'
import clock from '../../assets/clockImg.png'
import cart from '../../assets/cartImg.png'

export const Home = () => (
  <>
    <HomeContainer>
      <HomeInfo>
        <h2>Encontre o café perfeito para qualquer do dia</h2>
        <span>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
        </span>

        <GridInfo>
          <div>
            Teste
          </div>

          <div>
            Teste
          </div>

          <div>
            Teste
          </div>

          <div>
            Teste
          </div>


        </GridInfo>
      </HomeInfo>

      <span>
        <img src={banner} alt="" />
      </span>
    </HomeContainer>

    <HomeContent>
      <h1>Nosso cafés</h1>

      <div>
        ...
      </div>
    </HomeContent>
  </>

)