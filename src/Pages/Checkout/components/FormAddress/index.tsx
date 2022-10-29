import { useFormContext } from "react-hook-form"
import { ContainerInputFlex, InputRua, InputCEP, InputComplemento, InputNumero, InputBairro, InputUF, InputCidade } from "./styles"

export const FormAddress = () => {
    const { register } = useFormContext()

    return (
        <>
            <InputCEP placeholder="CEP" {...register('zipCode')} required />
            <InputRua placeholder="Rua" {...register('street')} required />


            <ContainerInputFlex>
                <InputNumero placeholder="Número" {...register('number')} required />
                <InputComplemento placeholder="Complemento" {...register('complement')} required />
            </ContainerInputFlex>


            <ContainerInputFlex>
                <InputBairro placeholder="Bairro" {...register('district')} required />
                <InputCidade placeholder="Cidade" {...register('city')} required />
                <InputUF placeholder="UF" {...register('UF')} required />
            </ContainerInputFlex>
        </>
    )
}