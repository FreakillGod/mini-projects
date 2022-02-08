import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState={
  loading:false,
  cart:cartItems,
  total:0,
  amount:0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initialState);

  const clearCart=()=>{
    dispatch({type:'CLEAR_CART'})
  }

  const remove=(id)=>{
    dispatch({type:'REMOVE_ITEM', payload:id})
  }

  const increase=(id)=>{
    dispatch({type:'INCREASE',payload:id})
  }
  const decrease=(id)=>{
    dispatch({type:'DECREASE',payload:id})
  }

  const fetchItems=async ()=>{
    dispatch({type:'LOADING'})
    let response=await fetch(url);
    let fetchedItems= await response.json();
    dispatch({type:'LOAD_ITEMS',payload:fetchedItems})
  }

  const handleAmount=(id,type)=>{
    dispatch({type:'HANDLE_AMOUNT', payload:{id,type}})
  }

  useEffect(()=>{
    fetchItems();
  },[])

  useEffect(()=>{
    dispatch({type:'TOTAL'})

  },[state.cart])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,decrease,
        handleAmount
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
