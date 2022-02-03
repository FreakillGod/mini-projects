import React, { useState } from 'react';
import data from './data';
function App() {

  const[count,setCount]=useState(0);
  const[text,setText]=useState([]);
  
  const formSubmit=(e)=>{
    e.preventDefault();
    let amount=parseInt(count);
    if(count<=0){
      amount=1;
    }
    if(count>8){
      amount=8;
    }
    setText(data.slice(0,amount));
  }

  console.log(text)
  return (
  <section className='section-center'>
     <h4>tired of boring lorem's???</h4>
    <form className='lorem-form' onSubmit={formSubmit}>
    <label htmlFor='amount'>Enter para Amount</label>
    <input type='number' value={count} id='amount' onChange={(e)=>setCount(e.target.value)}></input>
      <button className='btn' type='submit'>Generate</button>
    </form>
    <article className='lorem-text'>
    {text.map((text,index)=>{
      return(
        <p key={index}>{text}</p>
      )
    })}
    </article>
  </section>
    )
}


export default App;
