import React from 'react'
import Header from './Components/Common/Header'
import Footer from './Components/Common/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
        <Header />

        <Outlet />

        <Footer />
      
    </>
  )
}

export default MainLayout
