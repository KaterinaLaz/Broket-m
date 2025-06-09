import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="p-4">
      <h1 className="text-3xl font-bold text-blue-600">Broket is live!</h1>
    </div>  
  </StrictMode>,
)
