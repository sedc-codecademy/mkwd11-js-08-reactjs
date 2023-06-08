import './App.css'
import Footer from './components/Layout/Footer'
import Header from './components/Layout/Header'

function App() {
  const title = 'Class 2 app'

  return (
    <>
      <Header title={title} />
      <Footer title={title} />
    </>
  )
}

export default App
