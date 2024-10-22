import Header from './components/Header'
import Products from './containers/Products'

import { GlobalStyle } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Products />
      </div>
    </>
  )
}

export default App
