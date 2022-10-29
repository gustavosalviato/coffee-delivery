import styled from "styled-components";

export const AddressFormContainer = styled.div`
  display: grid;
  width:100%;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep{
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street{
    grid-column: span 3;
  }

  .complement{
    grid-column: span 2;
  }
  
`