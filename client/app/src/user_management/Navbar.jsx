
import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/navbar.css";

const Navbar = () => {
 return (
  
     <nav className="nav">
        <div className="imgLogo"></div>
        <h3 className="heading3">Mento</h3>
       <div
         className={"nav__menu"}
         id="nav-menu"
       >
         <ul className="nav__list">
           <li className="nav__item">
             <NavLink to="/" className="nav__link">
               Home
             </NavLink>
           </li>
           
           <li className="nav__item">
             <NavLink
               to="/about-us"
               className="nav__link"
             >
               About Us
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/contact"
               className="nav__link"
             >
              Contact 
             </NavLink>
           </li>
          
           <li className="nav__item">
             <NavLink to="/signin" className="nav__link nav__cta">
               Sign In
             </NavLink>
           </li>
         </ul>
        
       </div>

     </nav>
 );
};

export default Navbar;