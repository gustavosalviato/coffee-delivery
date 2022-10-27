import { AdressHeader, ButtonContainer, CardContent, CardItemsSelected, CheckoutContainer, ContainerInputFlex, GridTwoColumns, InputBairro, InputCEP, InputCidade, InputComplemento, InputNumero, InputRua, InputUF, PaymentsContainer, TotalSection } from "./styles"
import { CarItemSelected } from "./components/CardItemSelected"
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react"

export const Checkout = () => (
  <CheckoutContainer>
    <GridTwoColumns>
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
          <InputCEP placeholder="CEP" />
          <InputRua placeholder="Rua" />


          <ContainerInputFlex>
            <InputNumero placeholder="Número" />
            <InputComplemento placeholder="Complemento" />
          </ContainerInputFlex>


          <ContainerInputFlex>
            <InputBairro placeholder="Bairro" />
            <InputCidade placeholder="Cidade" />
            <InputUF placeholder="UF" />
          </ContainerInputFlex>
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
      </section>


        <section>
          <h2>Cafés selecionados</h2>
          <CardItemsSelected>
            <ul className="list">
              <CarItemSelected />
              <CarItemSelected />
            </ul>
  
            <TotalSection>
              <div className='defaultLabels'>
                <span>Total Items</span>
                <strong>29,70</strong>
              </div>
  
              <div className='defaultLabels'>
                <span>Total Items</span>
                <strong>29,70</strong>
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

    </GridTwoColumns>

    
      

  </CheckoutContainer>
)