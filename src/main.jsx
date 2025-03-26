import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './login.css'
import './register.css'
import './forgotpw.css'

import App from './app.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
