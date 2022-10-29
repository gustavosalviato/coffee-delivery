import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import { OrderData } from "../../../../context/cartContext"
import { AdressColumn, ContainerFlex } from "./styles"

interface SuccessInfoProps {
    order: OrderData
}

export const SuccessInfo = ({ order }: SuccessInfoProps) => {
    return (
        <AdressColumn>
            <ContainerFlex bgColor="purple">
                <MapPin size={28} weight="fill" />
                <div>
                    <span>Entrega em {order.street}, {order.number}</span>
                    <strong>{order.district} - {order.city}, {order.UF}</strong>
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

        </AdressColumn>)
}