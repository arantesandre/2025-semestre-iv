import { useState } from 'react'
import './App.css'
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* chamar os components aqui */}
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
