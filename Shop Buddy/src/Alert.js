import React, { useEffect } from 'react'

const Alert = ({show,msg,type,handleAlert,list}) => {

  useEffect(()=>{
    const timer=setTimeout(()=>{
      handleAlert();
    },3000)
    return ()=>clearTimeout(timer);
  },[list])

  return (
    <h3 className={`alert alert-${type}`}>{msg}</h3>
  )
}

export default Alert
