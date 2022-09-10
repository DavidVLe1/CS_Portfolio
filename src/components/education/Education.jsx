import React from 'react'
import './education.css'

function Education() {
  return (
    <div className='container'>
    <div><h1>Education</h1>
    <br></br>
      <tr><div>
        
          <ul><li><h3>Masters of Applied Computer Science</h3></li>
            <li>Saint Xavier University | Chicago, IL</li>
            <li>August 2020-August 2022</li>
            <li>GPA: 4.0</li>
        </ul>
        <td className='iconSXU'></td>
        </div>
      </tr>
      <br></br>
      <tr><div>
          <ul><li><h3>Bachelors of Science in Chemistry</h3></li>
            <li>University of Illinois at Chicago | Chicago, IL</li>
            <li>August 2014-May 2018</li>
        </ul>
        </div><td className='iconUIC'></td>
      </tr>
    </div>
    </div>
  )
}

export default Education