import { Buy, Panel, ProducItemFooter, ProductItemContainer } from "./styles"
import tradicional from '../../../../assets/tradicional.png'
import { Minus, Plus, ShoppingCart } from "phosphor-react"
export const ProductItem = () => {
    return (
        <ProductItemContainer>
            <img src={tradicional} alt="" />

            <div>
                <span>TRADICIONAL</span>
                <span>TRADICIONAL</span>
            </div>


            <strong>Expresso Tradicional</strong>

            <p>O tradicional café feito com água quente e grãos moídos</p>


            <ProducItemFooter>
                <span>
                    <small>R$</small>
                    <strong>9,90</strong>
                </span>



                <div>
                    <Panel>
                        <button>
                            <Minus weight="bold" />
                        </button>
                        <small>1</small>
                        <button>
                            <Plus weight="bold" />
                        </button>
                    </Panel>

                    <Buy>
                        <button>
                            <ShoppingCart size={22} weight="fill" />
                        </button>
                    </Buy>

                </div>


            </ProducItemFooter>

        </ProductItemContainer>
    )
}