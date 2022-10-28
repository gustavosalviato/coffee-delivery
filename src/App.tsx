import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/themes/global"
import { BrowserRouter } from "react-router-dom"
import { Router } from './Router'
import { CartContextProvider } from "./context/cartContext"
export const App = () => {
  return (

    <ThemeProvider theme={defaultTheme}>

      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}