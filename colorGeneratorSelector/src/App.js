import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'


function App() {
  const[color,setColor]=useState('');
  const[error,setError]=useState(false);
  const[colorList,setColorList]=useState(new Values('#000999').all(10));

  const formSubmit=(e)=>{
    e.preventDefault();
  try {
    let colors=new Values(color).all(10);
    setError(false);
    setColorList(colors);
  } catch (error) {
    setError(true);
    console.log(error);
  }
  }

  return (
    <>
    <section className='container'>
    <form onSubmit={formSubmit}>
      <h3>tired of pricking color</h3>
      <input type='text' value={color} onChange={(e)=>setColor(e.target.value)}
       className={`${error?'error':null}`} placeholder='#00099'/>
      <button type='submit' className='btn'>generate</button>
    </form>
    </section>
    <section className='colors'>
      {colorList.map((color,index)=>{
        console.log({...color})
        return(
          <SingleColor props={index} {...color} index={index} key={index}/>
        )
      })}
    </section>
    </>
  )
}

export default App