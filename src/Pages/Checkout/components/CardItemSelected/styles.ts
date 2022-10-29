import styled from "styled-components";

export const CardItemContainer = styled.li`

  display: flex;
  gap: 1.25rem;
  border-bottom: 1px solid ${props => props.theme["base-button"]};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  & + li{
    margin-top: 0.75rem;
  }

  img{
    width: 4rem;
    height: 4rem;
  }

  strong{
    margin-left: auto;
    color: ${props => props.theme["base-text"]};
    font-size: 1rem;
    font-weight: 700;
  }
`

export const TitlesAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContainerFlexButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;


  span{
    display: flex;
    background: ${props => props.theme["base-button"]};
    border-radius: 6px;
    padding: 0.5rem;
    gap: 0.5rem;
    line-height: 1.3;
  }

  button{
    display: flex;
    align-items: center;
    background: transparent;
    border: 0;
    outline: 0; 
    color: ${props => props.theme["purple"]};
    transition: 0.4s;
  }

  button:hover{
    color: ${props => props.theme["purple-dark"]}; 
  }

  small{
    font-size: 1rem;
    color: ${props => props.theme["base-title"]}

  }
`
export const RemoveButton = styled.button`
  &.removeButton{
    >svg{
      color: ${props => props.theme.purple}
    }

    text-transform: uppercase ;
    gap: 0.25rem;  
    background: ${props => props.theme["base-button"]};
    color: ${props => props.theme["base-text"]};
    padding: 0.5rem;
    border-radius: 6px;
    transition: 0.4s;
    font-size: 0.75;
    line-height: 1.3;
  }
  
  &.removeButton:hover{
    background: ${props => props.theme["base-hover"]};
    color: ${props => props.theme["base-subtitle"]};
  }
  
`