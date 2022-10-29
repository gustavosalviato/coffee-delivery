import styled from "styled-components"

export const PaymentMethodContainer = styled.div`
    input{
        visibility: hidden;
        appearance: none;
    }

    input:checked + label div{
        border: 1px solid ${props => props.theme.purple};
        background: ${props => props.theme["purple-light"]};
    }
`




export const ContentContainer = styled.div`
 padding: 0 1rem;
  background: ${props => props.theme["base-button"]};
  color: ${props => props.theme["base-text"]};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  transition: 0.4s;
  border: 1px solid ${props => props.theme["base-button"]};

    &:hover{
        background: ${props => props.theme["base-hover"]};
    }

  svg{
    color: ${props => props.theme.purple}
  }

  user-select: none;
`