import { Provider } from 'react-redux'
import React from 'react'
import GlobalStyle from './styles/GlobalStyle'

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <ListaContatos />
  </Provider>
)

export default App
