import { ButtonContainer, CheckoutContainer, GridTwoColumns, TotalSection } from "./styles"
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react"
import { AddressCard } from "./components/AddressCard"
import { ItemsSelected } from "./components/ItemsSelected"

export const Checkout = () => (
  <CheckoutContainer>
    <GridTwoColumns>
      <AddressCard />

      <ItemsSelected />

    </GridTwoColumns>
  </CheckoutContainer>
)