import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router.jsx'
import CategoriesProvider from './context/CategoriesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CategoriesProvider>
      <RouterProvider router={router} />
    </CategoriesProvider>
  </StrictMode>,
)
