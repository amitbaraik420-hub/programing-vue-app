import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Hero from './assets/hero';
import Program from './assets/program';
import Physics from './assets/physics';
import Chemistry from './chemistry';
import Status from './assets/status';
let router = createBrowserRouter([

  {
    path:"/",
    element:<Hero></Hero>,
    children:[
       
         {path:"/",element:<Program></Program>},
         {path:'/chemistry/:id',
          element:<Chemistry></Chemistry>,
          loader: async () => {
          const response = await fetch("/Data.json");
          return response.json();
          }
        },
        {
          path: "/timeline",
          element: <Physics />,
          loader: async () => {
          const response = await fetch("/Data.json");
          return response.json();
          }
        },
        {path:"/status",
        element:<Status></Status>}
        ],
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)
