import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const {closeMenu}=useGlobalContext();
  
  return (
    <section className='hero' onMouseOver={closeMenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payment infrastructer for the internet</h1>
          <p>this is the best place for you if you want to leatn new things but it just doesnt make sense cauuse you are new like me but you still want to get started new maybe later or after</p>
          <button className='btn'>
            Start now
          </button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone'/>
        </article>
      </div>
    </section>
  )
}

export default Hero