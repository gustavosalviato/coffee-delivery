import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import { OrderData } from "../../../../context/cartContext"
import { AdressColumn, ContainerFlex } from "./styles"

interface SuccessInfoProps {
    order: OrderData
}

export const SuccessInfo = ({ order }: SuccessInfoProps) => {

    let formattedPayment


    switch (order.payMethods) {
        case 'debit':
            formattedPayment = 'Cartão de Débito'
        case 'credit':
            formattedPayment = 'Cartão de Crédito'
        case 'money':
            formattedPayment = 'Dinheiro'

        default: order.payMethods
    }


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
                    <strong>{formattedPayment}</strong>
                </div>

            </ContainerFlex>

        </AdressColumn>)
}