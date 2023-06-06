import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ProductList from './components/ProductList/ProductList'

function App() {

  const fullName = 'Pero Perov'

  const logEvent = (e) => {
    console.log(e)
  }

  const logName = () => console.log(fullName)

  return <main>
    <Header />
    <ProductList />
    <input type="text" value={fullName} placeholder='Add Full Name' />
    <button disabled={!fullName} type='button' onClick={(e) => logEvent(e)}>Submit</button>
    <button disabled={!fullName} type='button' onClick={logName}>Submit 2</button>
    <article className="main__article">This is an article</article>
    <article style={{ color: 'green' }} >This is another article</article>
    {/* <footer id='footer'>This is footer</footer> */}
    <Footer />
  </main>
}

export default App
