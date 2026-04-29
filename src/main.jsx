import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

// 
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from './layouts/RootLayout.jsx'
import Home from './Components/Home.jsx'
import ProductSection from './Components/ShopUi/ProductSection.jsx'
// import Contact from './Components/Contact.jsx'
import ProductsLoader from './Loaders/ProductLoader.jsx'
import SingleViewProduct from './Components/ShopUi/SingleViewProduct.jsx'
import SingleProductLoader from './Loaders/SingleProductLoader.js'
import { Provider } from "react-redux"
import { store } from './redux/store.js'
import Cart from './Components/ShopUi/Cart.jsx'
import React from 'react'
import Login from './Components/Login.jsx'
import ProtectRoute from './auth/protect.jsx'
import Profile from './Components/Profile.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement 

    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "products", loader: ProductsLoader, element: <ProductSection />, hydrateFallbackElement: <p>Loading...</p> },
      // { path: "contact", element: <Contact /> },
      {
        path: "product/:productId",
        element: (
          <ProtectRoute>
            <SingleViewProduct />
          </ProtectRoute>),
        loader: SingleProductLoader
      },
      {
        path: "cart", element: (
          <ProtectRoute>
            <Cart />
          </ProtectRoute>
        )
      },
      {
        path: "profile", element: (
          <ProtectRoute>
            <Profile />
          </ProtectRoute>
        )
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store}>

      <RouterProvider router={router} />

    </Provider>

  </StrictMode>
)


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
