import { SuccessContainer, SucessSubtitle, SuccessTitle, GriTwoColumns, IlustrationImage, AdressColumn, ContainerFlex } from "./styles"
import ilustration from '../../assets/ilustration.png'
import { MapPin, Timer, CurrencyDollar } from "phosphor-react"


export const Success = () => (
  <SuccessContainer>
    <SuccessTitle>Uhu! Pedido confirmado</SuccessTitle>

    <SucessSubtitle>Agora é só aguardar que logo o café chegará até você</SucessSubtitle>


    <GriTwoColumns>
      <AdressColumn>
        <ContainerFlex bgColor="purple">
          <MapPin size={28} weight="fill" />
          <div>
            <span>Entrega em Rua João Daniel Martinelli, 102</span>
            <strong>Farrapos - Porto Alegre, RS</strong>
          </div>

        </ContainerFlex>

        <ContainerFlex bgColor="yellow">
          <Timer size={28} weight="fill" />
          <div>
            <span>Previsão de entrega</span>
            <strong>20 min - 30 min </strong>
          </div>

        </ContainerFlex>


        <ContainerFlex bgColor="yellow-dark">
          <CurrencyDollar size={28} weight="fill" />
          <div>
            <span>Pagamento na entrega</span>
            <strong>Cartão de Crédito</strong>
          </div>

        </ContainerFlex>


      </AdressColumn>

      <IlustrationImage src={ilustration} alt="" />
    </GriTwoColumns>

  </SuccessContainer>

)