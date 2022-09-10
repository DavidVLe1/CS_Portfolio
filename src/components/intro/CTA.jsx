import React from 'react'
import David_Le_CS_Resume from "../../assets/David_Le_CS_Resume.pdf"

function CTA() {
  return (
    <div className='cta'>
        <table>
        <tbody><a href={David_Le_CS_Resume} download className='btn'>Download Resume</a></tbody>
        <tbody><a href='mailto:Le.Davidv18@gmail.com' className='btn btn-primary'>Let's Talk</a></tbody>
        </table>
        
        
    </div>
  )
}

export default CTA