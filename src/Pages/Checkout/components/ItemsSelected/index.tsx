import { useCartContext } from "../../../../context/cartContext"
import { TotalSection, ButtonContainer } from "../../styles"
import { CardItemSelected } from "../CardItemSelected"
import { CardItemsSelected } from "./styles"

export const ItemsSelected = () => {
    const { cartItems } = useCartContext()
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
                        <strong>29,70</strong>
                    </div>

                    <div className='defaultLabels'>
                        <span>Entrega</span>
                        <strong>Grátis</strong>
                    </div>

                    <div className='totalLabels'>
                        <span>Total</span>
                        <strong>29,70</strong>
                    </div>
                </TotalSection>

                <ButtonContainer>
                    CONFIRMAR
                </ButtonContainer>
            </CardItemsSelected>
        </section>
    )
}