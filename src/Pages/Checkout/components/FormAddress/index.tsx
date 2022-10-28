import { ContainerInputFlex, InputRua, InputCEP, InputComplemento, InputNumero, InputBairro, InputUF, InputCidade } from "./styles"

export const FormAddress = () => {
    return (
        <>
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
        </>
    )
}