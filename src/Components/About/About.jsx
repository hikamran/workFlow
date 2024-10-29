import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{
          setPlayState(true)
        }}/>
      </div>
      <div className="about-right">
        <h3>OUR UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim veritatis eveniet deserunt deleniti fugiat vero, asperiores cupiditate repellendus dolorem molestiae maxime quae et consectetur in fuga tenetur! Consequatur, magnam officiis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum omnis velit vero, temporibus quisquam blanditiis quidem dolorem mollitia commodi assumenda.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptates, labore delectus facilis voluptatibus perferendis nam, minima sit natus distinctio placeat et porro quam excepturi </p>
      </div>
    </div>
  )
}

export default About
