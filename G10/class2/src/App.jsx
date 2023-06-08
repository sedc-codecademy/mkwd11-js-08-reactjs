import './App.css'
import Footer from './components/Layout/Footer'
import Header from './components/Layout/Header'
import ProductsContainer from './components/Shop/ProductsContainer'

function App() {
  const title = 'Class 2 app'

  return (
    <>
      <Header title={title} />
      <ProductsContainer />
      <Footer title={title} />
    </>
  )
}

export default App
