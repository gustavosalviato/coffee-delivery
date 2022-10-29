import { CheckoutContainer, GridTwoColumns } from "./styles"
import { AddressCard } from "./components/AddressCard"
import { ItemsSelected } from "./components/ItemsSelected"
import * as zod from 'zod'
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useCartContext } from "../../context/cartContext"

enum PaymentsMethods {
  credit = 'credit',
  money = 'money',
  debit = 'debit',
}

const AddressFormValidationSchema = zod.object({
  zipCode: zod.string().min(8, 'Insira um CEP válido'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  district: zod.string().min(1, 'Informe o bairro'),
  complement: zod.string(),
  city: zod.string().min(1, 'Informe a cidade'),
  UF: zod.string().min(1, 'Campo UF é Obrigatório'),
  payMethods: zod.nativeEnum(PaymentsMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    }
  })
})

export const Checkout = () => {

  const { createOrder, clearCart } = useCartContext()

  const navigate = useNavigate()

  type AddressFormData = zod.infer<typeof AddressFormValidationSchema>

  const newAddressForm = useForm<AddressFormData>({
    resolver: zodResolver(AddressFormValidationSchema)
  }
  )

  const { handleSubmit } = newAddressForm

  const handleCreateNewAddress = (data: AddressFormData) => {
    createOrder(data)
    clearCart()

    navigate('/success')
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleCreateNewAddress)}>
      <FormProvider {...newAddressForm}>
        <GridTwoColumns>
          <AddressCard />

          <ItemsSelected />

        </GridTwoColumns>
      </FormProvider>
    </CheckoutContainer >
  )

}