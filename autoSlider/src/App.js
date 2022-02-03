import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight, FaRegPlayCircle } from 'react-icons/fa';
import data from './data';
import people from './data';
function App() {

  const[people,setPeople]=useState(data)
  const[index,setIndex]=useState(0)

  useEffect(()=>{
    if(index>people.length-1)
    setIndex(0)
    if(index<0){
      setIndex(people.length-1)
    }
  },[index])

  useEffect(()=>{
    const timer=setInterval(()=>{
      setIndex(index+1)
    },4000)
    return ()=>{
      clearInterval(timer)
    }
  },[index])

  return(
    <section className='section'>
      <div className='title'>
      <h4>/ reviews</h4>
      </div>
      <div className="section-center">
      {people.map((person,personIndex)=>{
        const{id,name,image,quote,title}=person;

        let position='nextSlide';
        if(personIndex===index){
           position='activeSlide'
        }
        if(personIndex===index-1 || (index===0 && personIndex==people.length-1)){
          position='lastSlide'
        }

        return(
          <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
        )
      })}
      
      <button className='prev' onClick={()=>setIndex(index-1)}><FiChevronLeft/></button>
      <button className='next' onClick={()=>setIndex(index+1)}><FiChevronRight/></button>
      </div>
    </section>
  )
}

export default App;


