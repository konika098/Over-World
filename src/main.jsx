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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:"/home",
        element:<Home/>
      },
      {
        path:"/services",
        element:<Services/>,
        
      },
      {
        path:"/serviceDetails",
        element:<ServiceDetails/>
      },
      {
        path:"/page",
        element:<Pages/>
      },
      {
        path:"/shop",
        element:<Shop/>,
        loader:()=>fetch('Products.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
