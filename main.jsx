import React from 'react'
import ReactDOM from 'react-dom/client'
import Appr from './react-b/Appr'
import CC2 from "./react-b/cc2"
import App1 from "./react-b/App1"
import App from "./boubella/App"
import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <CC2 />
    </BrowserRouter>

  </React.StrictMode>
)
