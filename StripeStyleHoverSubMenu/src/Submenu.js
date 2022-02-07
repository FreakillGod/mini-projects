import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => { 

  const{isMenuOpen,location,page:{page,links}}=useGlobalContext();

  const position=useRef(null);
  const[column,setColumn]=useState('col-2')

  useEffect(()=>{
    setColumn('col-2')
    const submenu=position.current;
    const{center,bottom}=location;
    submenu.style.left=`${center}px`
    submenu.style.top=`${bottom-3}px`
    if(links.length===3){
      setColumn('col-3')
    }if(links.length>3){
      setColumn('col-4')
    }
    
  },[location,links])

  return <aside className={`${isMenuOpen?'submenu show':'submenu'}`} ref={position}>
    <h4>{page}</h4>
    <div className={`submenu-center ${column}`}>
      {links.map((link,index)=>{
        const{label,icon,url}=link;
        return <a href={url} key={index}>{icon}{label}</a>
      })}
    </div>
  </aside>
}

export default Submenu
