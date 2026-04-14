import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Hero from './assets/hero';
import Program from './assets/program';
import Physics from './assets/physics';
import Chemistry from './chemistry';

    let router = createBrowserRouter([

  {
    path:"/",
    element:<Hero></Hero>,
    children:[
         {path:"/timeline",element:<Physics></Physics>},
         {path:"/",element:<Program></Program>},
         {path:'/chemistry/:id',
          element:<Chemistry></Chemistry>,
          loader: () => fetch("/Data.json").then(res => res.json())
        },
       
    ]
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)
