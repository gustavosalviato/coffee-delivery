import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { CartItem, useCartContext } from '../../../../context/cartContext'
import { formatPrice } from '../../../../helpers/formatPrice'
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

  const formattedPrice = formatPrice(cartItem.quantity * cartItem.price)

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

      <strong>R$ {formattedPrice}</strong>
    </CardItemContainer >
  )
}