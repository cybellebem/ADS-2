import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import FormularioControlado from './FormularioControlado.jsx'
import FormularioNaoControlado from './FormularioNaoControlado.jsx'
import ComponenteControlado from './ComponenteControlado.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ComponenteControlado/>
  </StrictMode>,
)
