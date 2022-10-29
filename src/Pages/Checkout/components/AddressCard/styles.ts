import styled from "styled-components";


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

export const PaymentsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem
`
