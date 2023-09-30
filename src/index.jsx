import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/sass/index.scss'
import 'boxicons'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
