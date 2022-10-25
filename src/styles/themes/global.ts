import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus{
  outline: none;
  box-shadow: 0 0 0 2px ${props => props.theme['yellow']};
}

body{
  background: ${props => props.theme['background']};;
  color: ${props => props.theme['base-subtitle']};
}


body,input, textarea, button{
  font-weight: 400;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
}

button {
  cursor: pointer;
}

`