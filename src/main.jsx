import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductPage from './assets/ProductPage.jsx'







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductPage/>
   <App/>
    
  </StrictMode>,
)