import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Re_Rendering from './Re_Rendering.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <App />
    <Re_Rendering/>
  // </StrictMode>,
)
