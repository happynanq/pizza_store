import React from 'react';
import Navbar from './Navbar';

const NavbarContainer = (props)=>{
  return(
    <Navbar isAdmin={props.isAdmin} isAuth={props.isAuth}/>
  )
}
export default NavbarContainer 