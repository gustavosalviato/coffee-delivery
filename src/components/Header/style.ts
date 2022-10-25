import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;  
  justify-content: space-between;
  align-items: center;

  padding: 2.688rem 10rem;

  nav{
    display: flex;
    align-items: center;
    gap: 0.75rem;
    line-height: 1.6;

  }

  a{
    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;

    background-color: ${props => props.theme["purple-light"]};
    color: ${props => props.theme.purple};
    align-items: center;
    padding: 0.5rem;
    border-radius: 6px;  
    font-size: 0.875rem;  
    line-height: 1.3;
    gap: 0.25rem;
  }

  a + a{
    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;

    color: ${props => props.theme.purple};
    align-items: center;
    padding: 0.5rem;
    border-radius: 6px;  
    font-size: 0.875rem;  
    line-height: 1.3;
    gap: 0.25rem;

    
   background-color: ${props => props.theme["yellow-light"]};
   color: ${props => props.theme["yellow-dark"]};
  }
`
