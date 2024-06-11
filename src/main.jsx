import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './Components/Pages/About.jsx'
import Shop from './Components/Pages/Shop.jsx'
import Contact from './Components/Pages/Contact.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/shop",
    element: <Shop/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
