import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props)=>{
  return(
    <nav>
    <div className="nav-wrapper red darken-3  ">
      <div 
        className="brand-logo" 
        style={{paddingLeft:10}}
      >
        <img 
          src={require("../../helper/img/logo2.png")} 
          alt="logo" 
          style={{width:64}}
            
          />
      </div>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/store">Store</Link></li>
        {
          props.isAdmin && <li><Link to="/addItem">Add Item</Link></li>
        }
        <li><Link to="card">Card</Link></li>
        {
          props.isAuth ? <li><Link to="/profile">Profile</Link></li> : <li><Link to="/auth">Auth</Link></li>
        }
        
      </ul>
    </div>
  </nav>
  )
}
export default Navbar 