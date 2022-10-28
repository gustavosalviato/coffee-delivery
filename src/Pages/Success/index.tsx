import { SuccessContainer, SucessSubtitle, SuccessTitle, GriTwoColumns, IlustrationImage } from "./styles"
import ilustration from '../../assets/ilustration.png'
import { SuccessInfo } from "./components/SuccessInfo"


export const Success = () => (
  <SuccessContainer>
    <SuccessTitle>Uhu! Pedido confirmado</SuccessTitle>

    <SucessSubtitle>Agora é só aguardar que logo o café chegará até você</SucessSubtitle>

    <GriTwoColumns>

      <SuccessInfo />

      <IlustrationImage src={ilustration} alt="" />
    </GriTwoColumns>

  </SuccessContainer>

)