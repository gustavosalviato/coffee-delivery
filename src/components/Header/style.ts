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
    position: relative;


    span{
      position: absolute;
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 50%;
      top: calc(-1.25rem / 2);
      right: calc(-1.25rem / 2);
      color: ${props => props.theme.white};
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.75rem;
      font-weight: 700;
      background-color: ${props => props.theme["yellow-dark"]};
    }
  }
`

