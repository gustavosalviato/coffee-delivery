import { useFormContext } from "react-hook-form"
import { ContainerInputFlex, InputRua, InputCEP, InputComplemento, InputNumero, InputBairro, InputUF, InputCidade } from "./styles"

export const FormAddress = () => {
    const { register } = useFormContext()

    return (
        <>
            <InputCEP placeholder="CEP" {...register('zipCode')} />
            <InputRua placeholder="Rua" {...register('street')} />


            <ContainerInputFlex>
                <InputNumero placeholder="Número" {...register('number')} />
                <InputComplemento placeholder="Complemento" {...register('complement')} />
            </ContainerInputFlex>


            <ContainerInputFlex>
                <InputBairro placeholder="Bairro" {...register('district')} />
                <InputCidade placeholder="Cidade" {...register('city')} />
                <InputUF placeholder="UF" {...register('UF')} />
            </ContainerInputFlex>
        </>
    )
}