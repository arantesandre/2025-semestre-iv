import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import EstruturaPagina from './components/EstruturaPagina.jsx'
import PaginaFilme from './filme/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
   <PaginaFilme />
  </StrictMode>,
)
