import { CheckoutContainer, GridTwoColumns } from "./styles"
import { AddressCard } from "./components/AddressCard"
import { ItemsSelected } from "./components/ItemsSelected"
import * as zod from 'zod'
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

const AddressFormValidationSchema = zod.object({
  zipCode: zod.string().min(1),
  street: zod.string().min(1),
  number: zod.string().min(1),
  district: zod.string().min(1),
  complement: zod.string().min(1),
  city: zod.string().min(1),
  UF: zod.string().min(1, 'Campo UF é Obrigatório').max(2, 'Campo UF é deve conter no máximo 2 letras'),
})

export const Checkout = () => {

  const navigate = useNavigate()

  type AddressFormData = zod.infer<typeof AddressFormValidationSchema>

  const newAddressForm = useForm<AddressFormData>({
    resolver: zodResolver(AddressFormValidationSchema)
  }
  )

  const { handleSubmit } = newAddressForm

  const handleCreateNewAddress = (data: AddressFormData) => {
    console.log(data)

    navigate('/success')

  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleCreateNewAddress)}>
      <FormProvider {...newAddressForm}>
        <GridTwoColumns>
          <AddressCard />

          <ItemsSelected />

          <button>TESTE</button>
        </GridTwoColumns>
      </FormProvider>
    </CheckoutContainer >
  )

}