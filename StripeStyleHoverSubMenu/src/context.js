import React, { useState, useContext } from 'react'
import App from './App';
import sublinks from './data'

const AppContext=React.createContext();
export const AppProvider=({children})=>{

    const[isSideBarOpen,setIsSideBarOpen]=useState(false);
    const[isMenuOpen,setIsMenuOpen]=useState(false);
    const[location,setLocation]=useState({})
    const[page,setPage]=useState({page:'',links:[]})

    const openSideBar=()=>{
        setIsSideBarOpen(true);
    }
    const closeSideBar=()=>{
        setIsSideBarOpen(false);
    }
    const openMenu=(text,coordinates)=>{
        const page=sublinks.find((link)=>link.page===text);
        setPage(page);
        setLocation(coordinates)
        setIsMenuOpen(true);
    }
    const closeMenu=()=>{
        setIsMenuOpen(false);
    }
    
    return <AppContext.Provider value={{isSideBarOpen,isMenuOpen,
     openSideBar,closeSideBar,openMenu,closeMenu,location,page}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}