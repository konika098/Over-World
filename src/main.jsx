import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Layout/Root';
import Home from './Layout/Home/Home';
import Services from './Component/Services/Services';
import ServiceDetails from './Component/Services/ServiceDetails';
import Pages from './Layout/Pages/Pages';
import Shop from './Layout/Shop/Shop';
import Contact from './Layout/Contact/Contact';
import Login from './Layout/Contact/Login';
import Tournament from './Layout/Tournament/Tournament';
import AboutUs from './Layout/About/AboutUs';
import AuthProvider from './Component/ProviderFile/AuthProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/services",
        element: <Services />,

      },
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetails />,
        loader: () => fetch('Service.json')
      },
      {
        path: "/page",
        element: <Pages />
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: () => fetch('Products.json')
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/tournament",
        element: <Tournament />
      },
      {
        path: "/about",
        element: <AboutUs />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
