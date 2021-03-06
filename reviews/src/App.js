import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {

  const [loading,setLoading]=useState(true)
  const [tours,setTours]=useState([])

  const removeTour=(id)=>{
    const newTours=tours.filter((tour)=>tour.id!==id);
    setTours(newTours)
  }

  const getData=async()=>{
    setLoading(true)

    try {
      const respose= await(fetch(url));
      const toursInfo=await respose.json();
      if(toursInfo){
        setLoading(false);
        setTours(toursInfo)
        console.log(toursInfo)
    }
    } catch (error) {
      console.log(error)
    }
    
    
  }
  
  useEffect(()=>{
  getData();
  },[])
  
  if(loading){
    return <Loading/>
  }

  if(tours.length===0){
    return(
      <div className='title'>
        <h2>No tours left</h2>
        <button className='btn' onClick={getData}>Refresh</button>
      </div>
    )
  }
  return (
    <section>
      <Tours tours={tours} removeTour={removeTour}/>
    </section>
  )
}

export default App
