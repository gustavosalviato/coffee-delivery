import styled from "styled-components";

export const CheckoutContainer = styled.div`
  min-width: 70rem;
  margin: 2.5rem 10rem;
  height: 100vh;
  padding: 0 1rem;
`

export const GridTwoColumns = styled.div`
  display: grid;
  grid-template-columns: 40rem 1fr;
  gap: 2rem;

  h2{
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    line-height: 1.3;
    font-weight: 700;
    color: ${props => props.theme["base-subtitle"]}
  }
`
export const CardContentBasic = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1rem;
  background: ${props => props.theme["base-card"]};
  padding: 2.5rem;

`
export const CardContent = styled(CardContentBasic)`

  border-radius: 6px;
`

export const CardItemsSelected = styled(CardContentBasic)`
  border-radius: 6px 44px;
  display: flex;
  flex-direction: column;

  div{
    display: flex;
  }

  &.list{
    display: flex;
    flex-direction: column;
  }

`


export const AdressHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg{
    color: ${props => props.theme["yellow-dark"]}
  }

  .svgPurple {
    color: ${props => props.theme["purple"]}
  }

  div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.3;

    span{
      color: ${props => props.theme["base-subtitle"]};
      font-size: 1rem;
      font-weight: 400;
      
    }

    span + span{
      color: ${props => props.theme["base-text"]};
      font-size: 0.875rem;

    }
  }
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


export const ContainerInputFlex = styled.div`
  margin-top: 1rem;

  display: flex;
  gap: 0.75rem;

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

export const PaymentsContainer = styled.div`
  display: flex;
  gap: 0.75rem;


  div{
    display: flex;
    align-items: center;
    gap: 0.75rem;
    
    background: ${props => props.theme["base-button"]};
    border-radius: 6px;
    padding: 1rem;
    transition: 0.4s;
    cursor: pointer;

    svg{
      color: ${props => props.theme.purple}
    }

    span{
      text-transform: uppercase;
      color: ${props => props.theme["base-text"]};
      font-size: 0.75rem;
    }
  }

  div:hover{
    background: ${props => props.theme["base-hover"]};
  }
`


export const TotalSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;

  .defaultLabels {
    span{
      color: ${props => props.theme["base-text"]};
      font-size: 0.875rem;
    }

    strong{
      color: ${props => props.theme["base-text"]};
      font-size: 1rem;
      font-weight: 400;
    }
   
  }

  .totalLabels{
    span, strong{
      font-weight: 700;
      color: ${props => props.theme["base-subtitle"]};
      font-size: 1.25rem;
    }

  }

  div{
    justify-content: space-between;
  }
`

export const ButtonContainer = styled.button`
  background: ${props => props.theme["yellow"]};
  color: ${props => props.theme.white};

  border: none;
  outline: none;
  margin-top: 2.25rem;

  border-radius: 6px;
  padding: 0.75rem 0.5rem;
  transition: 0.4s;

  &:hover{
    background: ${props => props.theme["yellow-dark"]};
  }

`