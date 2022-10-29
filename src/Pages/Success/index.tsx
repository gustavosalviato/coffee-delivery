import { SuccessContainer, SucessSubtitle, SuccessTitle, GriTwoColumns, IlustrationImage } from "./styles"
import ilustration from '../../assets/ilustration.png'
import { SuccessInfo } from "./components/SuccessInfo"
import { useCartContext } from "../../context/cartContext"

export const Success = () => {
  const { order } = useCartContext()

  return (
    <SuccessContainer >
      <SuccessTitle>Uhu! Pedido confirmado</SuccessTitle>

      <SucessSubtitle>Agora é só aguardar que logo o café chegará até você</SucessSubtitle>

      <GriTwoColumns>

        <SuccessInfo order={order} />

        <IlustrationImage src={ilustration} alt="" />
      </GriTwoColumns>

    </SuccessContainer >
  )

}

