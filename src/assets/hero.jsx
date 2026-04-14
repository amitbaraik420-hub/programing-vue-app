import React from 'react'
import Physics from './physics'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar'
import Footer from './footer'
export default function Hero() {
  return (
    <div>
         <Navbar></Navbar>
         <Outlet></Outlet>
          <Footer></Footer>
    </div>
  )
}
