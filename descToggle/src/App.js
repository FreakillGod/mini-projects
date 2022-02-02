import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {

  const[loading,setLoading]=useState(true);
  const[jobs,setJobs]=useState([]);
  const[value,setValue]=useState(0);

  const fetchedData=async()=>{
    setLoading(true)
    const response= await fetch(url);
    const newFetchedData= await response.json();
    setJobs(newFetchedData);
    setLoading(false)
  }

  useEffect(()=>{
    fetchedData()
  },[])

  if(loading){
    return (<div className='section loading'>
      <h1>Loading...</h1>
    </div>)
  }

  const ToggelPeople=(index)=>{
    setValue(index)
  }

  console.log(jobs[1])
  const {id,order,title,dates,duties,company}=jobs[value];
  return (
    <div className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
       </div>
      <div className='jobs-center'>
        <div className='btn-container'>
        {jobs.map((item,index)=>{
          return(
            <button className={`job-btn ${index==value&& 'active-btn'}`} key={index} onClick={()=>ToggelPeople(index)}>{item.company} </button>
          )
        })}
        </div>

        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>
            {dates}
          </p>
          {duties.map((duty,index)=>{
            return (<div key={index} className='job-description'>
              <FaAngleDoubleRight className='job-icon'/>
              <p>{duty}</p>
            </div>)
          })}
        </article>

      </div>
    </div>
  )
}

export default App
