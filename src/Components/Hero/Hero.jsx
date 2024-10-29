import React from 'react'
import './Hero.css'
// import dark_arrow from '/src/assets/dark_arrow.png'
import dark_arrow from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae officiis necessitatibus dolorem quasi sequi amet blanditiis laboriosam, atque repellendus fugiat?</p>
        <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
