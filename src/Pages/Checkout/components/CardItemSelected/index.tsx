import { Coffee, Minus, Plus, Trash } from 'phosphor-react'
import logo from '../../../../assets/tradicional.png'
import { QuantityInput } from '../../../../components/QuantityInput'
import { CartItem, useCartContext } from '../../../../context/cartContext'
import { coffees } from '../../../../data/coffees'
import { CardItemContainer, ContainerFlexButton, RemoveButton, TitlesAndButtonsContainer, } from './styles'

interface CardItemSelectedProps {
  cartItem: CartItem
}

export const CardItemSelected = ({ cartItem }: CardItemSelectedProps) => {
  const { removeProductToCart, changeItemQuantity } = useCartContext()

  const handleRemoveProductToCart = () => {
    removeProductToCart(cartItem.id)
  }

  const handleIncrease = () => {
    changeItemQuantity(cartItem.id, 'increase')
  }

  const handleDecrease = () => {
    changeItemQuantity(cartItem.id, 'decrease')
  }

  return (
    <CardItemContainer>
      <img src={`/fotos/${cartItem.photo}`} alt="" />


      <TitlesAndButtonsContainer>
        <span>{cartItem.name}</span>

        <ContainerFlexButton>
          <QuantityInput
            quantity={cartItem.quantity}
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
          />

          <RemoveButton className='removeButton' onClick={handleRemoveProductToCart} >
            <Trash size={16} />
            Remover
          </RemoveButton>
        </ContainerFlexButton>
      </TitlesAndButtonsContainer>

      <strong>R$ {cartItem.price}</strong>
    </CardItemContainer >
  )
}