import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'klaro/dist/klaro.css'
import * as Klaro from 'klaro'
import klaroConfig from './klaro-config'

Klaro.setup(klaroConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
