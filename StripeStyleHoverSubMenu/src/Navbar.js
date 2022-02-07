import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";

import { useGlobalContext } from "./context";

const Navbar = () => {

  const controlSubmenu=(e)=>{
    const page=e.target.getBoundingClientRect();
    const text=e.target.textContent;
    
    const center=((page.left+page.right)/2);
    const bottom=page.bottom;

    openMenu(text,{center,bottom})
  }

  const handleSubMenu=(e)=>{
    if(!e.target.classList.contains('link-btn')){
      closeMenu();
    }
  }

  const{openSideBar,openMenu,closeMenu} =useGlobalContext();
  return (
    <nav className="nav" onMouseOver={handleSubMenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="stipe" />
          <button className="btn toggle-btn" onClick={openSideBar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={controlSubmenu}>products</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={controlSubmenu}>developers</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={controlSubmenu}>company</button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
