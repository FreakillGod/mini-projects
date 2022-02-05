import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const[showLinks,setShowLinks]=useState(false);
  const containerHeightRef=useRef(null);
  const listHeightRef=useRef(null);

  useEffect(()=>{
    let newListHeightRef=listHeightRef.current.getBoundingClientRect();
    if(showLinks){
      console.log(newListHeightRef);
      containerHeightRef.current.style.height=`${newListHeightRef.height}px`;
    }else{
      containerHeightRef.current.style.height=`0px`;
    }
  },[showLinks])

  
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="image" />
          <button className="nav-toggle" onClick={()=>setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={containerHeightRef}>
          <ul className="links" ref={listHeightRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
