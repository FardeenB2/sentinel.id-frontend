import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './pages/login.jsx'
import './pages/register.jsx'
import './pages/forgotpw.jsx'
import './pages/settings.jsx'
import './css/forgotpw.css'
import './css/login.css'
import './css/register.css'
import './css/header.css'
import './css/settings.css'
import './css/presets.css'


import App from './app.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
