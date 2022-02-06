import React, { useState, useContext } from 'react'

const AppContext=React.createContext();

const AppProvider=({children})=>{

    const[isSideBarOpen,setIsSideBarOpen]=useState(false);
    const[isModelOpen,setIsModelOpen]=useState(false);

    const openSideBar=()=>{
        setIsSideBarOpen(true);
    }
    const closeSideBar=()=>{
        setIsSideBarOpen(false);
    }
    const openModel=()=>{
        setIsModelOpen(true);
    }
    const closeModel=()=>{
        setIsModelOpen(false);
    }

    return <AppContext.Provider value={{isSideBarOpen,isModelOpen,openSideBar,
        closeSideBar,openModel,closeModel}}>{children}</AppContext.Provider>
}

//custom hooks
export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider};