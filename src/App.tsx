import { Provider } from 'react-redux'
import { store } from './redux/store'
import ListaContatos from './containers/ListaContatos'
import GlobalStyle from './styles/GlobalStyle'

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <ListaContatos />
  </Provider>
)

export default App
