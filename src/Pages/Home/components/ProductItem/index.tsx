import { ButtonContainer, ContainerPrice, ProducItemFooter, ProductItemContainer, TagContainer } from "./styles"
import tradicional from '../../../../assets/tradicional.png'
import { QuantityInput } from "../../../../components/QuantityInput"
import { ShoppingCart } from "phosphor-react"
import { useState } from "react"
import { useCartContext } from "../../../../context/cartContext"
import { coffees } from "../../../../data/coffees"

export interface Coffee {
	id: number
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
	const [quantity, setQuantity] = useState(1)

	const { addProductToCart, changeItemQuantity } = useCartContext()

	const handleIncrease = () => {
		// changeItemQuantity(coffee.id)
		setQuantity((state) => state + 1)
	}

	const handleDecrease = () => {
		setQuantity((state) => state - 1)
	}

	const handleAddProductToCart = () => {
		const coffeeToAdd = {
			...coffee,
			quantity
		}

		addProductToCart(coffeeToAdd)
	}

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

				<QuantityInput
					quantity={quantity}
					onIncrease={handleIncrease}
					onDecrease={handleDecrease}
				/>

				<ButtonContainer onClick={handleAddProductToCart}>
					<ShoppingCart size={22} weight="fill" />
				</ButtonContainer>

			</ProducItemFooter>

		</ProductItemContainer >
	)
}