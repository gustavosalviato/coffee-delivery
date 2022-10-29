import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react"
import { FormAddress } from "../FormAddress"
import { PaymentMethodInput } from "../PaymentMethodsInput";
import { AdressHeader, CardContent, PaymentsContainer } from "./styles"
import { useFormContext } from 'react-hook-form'

export const paymentMethods = {
	credit: {
		label: "Cartão de crédito",
		icon: <CreditCard size={16} />,
	},
	debit: {
		label: "Cartão de débito",
		icon: <Bank size={16} />,
	},
	money: {
		label: "Dinheiro",
		icon: <Money size={16} />,
	},
};

export const AddressCard = () => {

	const { register } = useFormContext()

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
					{Object.entries(paymentMethods).map(([key, { label, icon }]) => (
						<PaymentMethodInput
							key={label}
							id={key}
							icon={icon}
							label={label}
							value={key}
							{...register("payMethods")}
						/>
					))}
				</PaymentsContainer>
			</CardContent>
		</section>)
}