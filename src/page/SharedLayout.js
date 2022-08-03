import React from 'react'
import { Outlet } from 'react-router-dom'
import StyledNavbar from '../components/StyledNavbar'
// import NavBar from '../components/NavBar'

function SharedLayout() {
  return (
      <>
        <StyledNavbar />
        <Outlet/>
      </>
  )
}
 
export default SharedLayout