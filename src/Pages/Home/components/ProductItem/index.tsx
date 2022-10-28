import { ButtonContainer, ContainerPrice, ProducItemFooter, ProductItemContainer, TagContainer } from "./styles"
import tradicional from '../../../../assets/tradicional.png'
import { QuantityInput } from "../../../../components/QuantityInput"
import { ShoppingCart } from "phosphor-react"

export interface Coffee {
	id: string
	tags: string[]
	name: string
	description: string
	photo: string
	price: number
}

interface ProductItemProps {
	coffee: Coffee
}

export const ProductItem = ({ coffee }: ProductItemProps) => {
	return (
		<ProductItemContainer>
			<img src={`/fotos/${coffee.photo}`} alt="" />

			<TagContainer>
				{coffee.tags.map((tag) => (
					<span key={tag}>{tag}</span>
				))}
			</TagContainer>

			<strong>{coffee.name}</strong>
			<p>{coffee.description}</p>

			<ProducItemFooter>
				<ContainerPrice>
					<small>R$</small>
					<strong>{coffee.price}</strong>
				</ContainerPrice>

				<QuantityInput />

				<ButtonContainer>
					<ShoppingCart size={22} weight="fill" />
				</ButtonContainer>

			</ProducItemFooter>

		</ProductItemContainer >
	)
}