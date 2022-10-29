import styled from "styled-components";
import { CardContentBasic } from "./components/AddressCard/styles";

export const CheckoutContainer = styled.form`
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

  &:not(:disabled):hover{
    background: ${props => props.theme["yellow-dark"]};
  }

  &:disabled{
    opacity: 0.7;
    cursor: not-allowed;
  }

`