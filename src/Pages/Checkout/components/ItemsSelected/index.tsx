import { useCartContext } from "../../../../context/cartContext"
import { TotalSection, ButtonContainer } from "../../styles"
import { CardItemSelected } from "../CardItemSelected"
import { CardItemsSelected } from "./styles"
import { formatPrice } from '../../../../helpers/formatPrice'

const DELIVERY_PRICE = 3.5

export const ItemsSelected = () => {
    const { cartItems, totalCart, cartQuantity } = useCartContext()

    const formatTotalItensCart = formatPrice(totalCart)

    const formatDeliveryPrice = formatPrice(DELIVERY_PRICE)

    const totalCartItens = formatPrice(DELIVERY_PRICE + totalCart)

    const disableButton = cartQuantity < 1

    return (
        <section>
            <h2>Cafés selecionados</h2>
            <CardItemsSelected>
                <ul className="list">
                    {cartItems.map((cartItem) => (
                        <CardItemSelected
                            key={cartItem.id}
                            cartItem={cartItem}
                        />
                    ))}
                </ul>

                <TotalSection>
                    <div className='defaultLabels'>
                        <span>Total Items</span>
                        <strong>{formatTotalItensCart}</strong>
                    </div>

                    <div className='defaultLabels'>
                        <span>Entrega</span>
                        <strong>{formatDeliveryPrice}</strong>
                    </div>

                    <div className='totalLabels'>
                        <span>Total</span>
                        <strong>{totalCartItens}</strong>
                    </div>
                </TotalSection>

                <ButtonContainer disabled={disableButton}>
                    CONFIRMAR
                </ButtonContainer>
            </CardItemsSelected>
        </section>
    )
}