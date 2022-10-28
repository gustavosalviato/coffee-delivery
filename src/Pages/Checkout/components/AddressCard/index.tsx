import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react"
import { FormAddress } from "../FormAddress"
import { AdressHeader, CardContent, ContainerInputFlex, PaymentsContainer } from "./styles"

export const AddressCard = () => {
	return (
		<section>
			<h2>Complete seu pedido</h2>
			<CardContent>
				<AdressHeader>
					<MapPinLine size={22} />
					<div>
						<span>Endereço de Entrega</span>
						<span>Informe o endereço onde deseja receber seu pedido</span>
					</div>
				</AdressHeader>

				<FormAddress />

			</CardContent>


			<CardContent>
				<AdressHeader>
					<CurrencyDollar className='svgPurple' size={22} />
					<div>
						<span>Pagamento</span>
						<span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
					</div>

				</AdressHeader>

				<PaymentsContainer>
					<div>
						<CreditCard size={16} />
						<span>cartão de crédito</span>
					</div>

					<div>
						<Bank size={16} />
						<span>cartão de débito</span>
					</div>


					<div>
						<Money size={16} />
						<span>dinheiro</span>
					</div>

				</PaymentsContainer>
			</CardContent>
		</section>)
}