import React from 'react'
import ReactDOM from 'react-dom/client'
import './globals.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout/MainLayout.tsx'
import Cart from './pages/Cart/Cart.tsx'
import Catalog from './pages/Catalog/Catalog.tsx'
import { Provider } from 'react-redux'
import { appStore } from './store/appStore.ts'
import NotFound from './pages/NotFound/NotFound.tsx'
import ScrollToTop from './components/layout/ScrollToTop/ScrollToTop.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <>
      <MainLayout />
      <ScrollToTop />
    </>,
    children: [
      {
        index: true,
        element: <Catalog />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
