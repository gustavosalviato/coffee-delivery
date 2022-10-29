import styled from "styled-components";

export const ContainerInputFlex = styled.div`
  margin-top: 1rem;

  display: flex;
  gap: 0.75rem;

`

export const BasicInput = styled.input`
  background: ${props => props.theme["base-input"]};
  border: 1px solid ${props => props.theme["base-button"]};

  height: 2.5rem;
  font-size: 0.875rem;
  padding: 0 0.5rem;
  border-radius: 4px;

  transition: 0.3s;

  &::placeholder{
    color: ${props => props.theme["base-label"]};
  }

`

export const InputCEP = styled(BasicInput)`
  width: 12.5rem;
`

export const InputRua = styled(BasicInput)`
  margin-top: 1rem;
`


export const InputNumero = styled(BasicInput)`
    width: 12.5rem;
`

export const InputComplemento = styled(BasicInput)`
  flex: 1;
`

export const InputBairro = styled(BasicInput)`
  width: 12.5rem;
`


export const InputCidade = styled(BasicInput)`
  flex: 1;
`

export const InputUF = styled(BasicInput)`
  width: 3.75rem;

`