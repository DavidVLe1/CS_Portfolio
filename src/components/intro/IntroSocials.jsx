import React from 'react'
import {GrLinkedin} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'

function IntroSocials() {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/david-le-48b981ab/' ><div className='icon'><GrLinkedin /></div></a>
        <a href='https://github.com/DavidVLe1' ><div className='icon'><BsGithub/></div></a>
    </div>
  )
}

export default IntroSocials