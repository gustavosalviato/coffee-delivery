import styled from "styled-components";

export const CardItemContainer = styled.li`

  display: flex;
  gap: 1.25rem;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme["base-button"]};
  padding-bottom: 0.75rem;

  .divFlex{
    gap: 0.5rem;
  }


  >div{
    display: flex;
    flex-direction: column; 
  }

  >div + div {
    gap: 0.5rem
  }

  img{
    width: 4rem;
    height: 4rem;
  }

  strong{
    flex: 1;
    font-weight: 700;
    line-height: 1.3;
    color: ${props => props.theme["base-text"]};
  }

  & + li{
    margin-top: 0.75rem;
  }

`

export const BasicContainer = styled.div`
    display: flex;
    align-items: center;
    background: ${props => props.theme["base-button"]};
    padding: 0.5rem;
    border-radius: 6px;

    gap: 0.5rem;

  button{
        display: flex;
        align-items: center;
        font-size: 0.75rem;
        color: ${props => props.theme["base-text"]};

        background: none;
        outline: 0;
        border: 0;
        line-height: 0;

        gap: 0.5rem;

        transition: 0.4ms;

        svg{
          color: ${props => props.theme.purple}
        }
    }

    button:hover{
        color: ${props => props.theme["purple-dark"]};

    }

    small{
        font-size: 1rem;
        color: ${props => props.theme["base-title"]}
    }
`