import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f9f9f9;
    font-family: 'Poppins', sans-serif;
    color: #333;
    padding: 20px;
  }

  button {
    cursor: pointer;
  }

  input, button {
    font-family: inherit;
  }
`

export default GlobalStyle
