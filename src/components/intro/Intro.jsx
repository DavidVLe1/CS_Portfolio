import React from 'react'
import "./intro.css"
import CTA from './CTA'
import personalPic from '../../assets/personalPic.jpg'
import IntroSocials from './IntroSocials'
function Intro() {
  return (
    <header>
      <div className='row'>
      <div className='column'><div className='me'>
        <img src={personalPic} alt="me"></img>
      </div></div>
      <div className='column'><div className='container header__container'>
      <h1 className='myName'>David Le</h1>
      <h2 className='jobTitle'><strong>Web Developer <br/>Chicago, IL</strong></h2>
      <CTA/>
      <IntroSocials/></div>
      </div>
      

      
      
      </div>
    </header>
  )
}

export default Intro