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
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Register from './Layout/Contact/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/services",
        element: <Services />,

      },
      {
        path: "/serviceDetails/:id",
        element: <PrivateRoute><ServiceDetails /></PrivateRoute>,
        loader: () => fetch('Service.json')
      },
      {
        path: "/page",
        element: <PrivateRoute><Pages/></PrivateRoute>
      },
      {
        path: "/shop",
        element: <PrivateRoute><Shop /></PrivateRoute>,
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
        path:"/register",
        element:<Register/>
      },
      {
        path: "/tournament",
        element:<PrivateRoute> <Tournament /></PrivateRoute>
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
