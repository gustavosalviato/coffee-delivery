import { ButtonContainer, ContainerPrice, ProducItemFooter, ProductItemContainer, TagContainer } from "./styles"
import tradicional from '../../../../assets/tradicional.png'
import { QuantityInput } from "../../../../components/QuantityInput"
import { ShoppingCart } from "phosphor-react"

export const ProductItem = () => {
	return (
		<ProductItemContainer>
			<img src={tradicional} alt="" />

			<TagContainer>
				<span>TRADICIONAL</span>
			</TagContainer>

			<strong>Expresso Tradicional</strong>
			<p>O tradicional café feito com água quente e grãos moídos</p>

			<ProducItemFooter>
				<ContainerPrice>
					<small>R$</small>
					<strong>9,90</strong>
				</ContainerPrice>

				<QuantityInput />

				<ButtonContainer>
					<ShoppingCart size={22} weight="fill" />
				</ButtonContainer>

			</ProducItemFooter>

		</ProductItemContainer >
	)
}