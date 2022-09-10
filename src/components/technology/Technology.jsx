import React from 'react'
import './technology.css'
import angularIcon from '../../assets/angular.png'
import androidStudioIcon from '../../assets/androidStudio.png'
import dockerIcon from '../../assets/docker.png'
import expressIcon from '../../assets/express.png'
import gitIcon from '../../assets/git.png'
import mongodbIcon from '../../assets/mongodb.svg'
import tableauIcon from '../../assets/tableau.svg'
import vscodeIcon from '../../assets/vscode.png'
import reactIcon from '../../assets/reactIcon.png'
import nodeIcon from '../../assets/nodeIcon.png'

function Technology() {
  return (
    <div class="container">
      <div><h1>Technologies and Frameworks</h1></div>

      <div className='row'>
        <div className='columnskills'>
          <div class="card">
            <div class="imgBx">
              <img src={gitIcon} alt="Git Icon" />
            </div>
            <div class="contentBx">
              <h2>Git</h2>
            </div>
          </div>
        </div>

        <div className='columnskills'>
          <div class="card">
            <div class="imgBx">
              <img src={reactIcon} alt="React Icon" />
            </div>
            <div class="contentBx">
              <h2>React</h2>
            </div>
          </div>
        </div>

        <div className='columnskills'>
          <div class="card">
            <div class="imgBx">
              <img src={angularIcon} alt="Angular Icon" />
            </div>
            <div class="contentBx">
              <h2>Angular</h2>
            </div>
          </div>
        </div>

        <div className='columnskills'>
          <div class="card">
            <div class="imgBx">
              <img src={nodeIcon} alt="Node Icon" />
            </div>
            <div class="contentBx">
              <h2>Node</h2>
            </div>
          </div>
        </div>


        <div className='columnskills'>
          <div class="card">
            <div class="imgBx">
              <img src={expressIcon} alt="Express Icon" />
            </div>
            <div class="contentBx">
              <h2>Express</h2>
            </div>
          </div>
        </div>

        <div className='columnskills'>
          <div class="card">
            <div class="imgBx">
              <img src={vscodeIcon} alt="VS Code Icon" />
            </div>
            <div class="contentBx">
              <h2>VS Code</h2>
            </div>
          </div>
        </div>

        <div className='columnskills'>
          <div class="card">
            <div class="imgBx">
              <img src={androidStudioIcon} alt="Android Studio Icon" />
            </div>
            <div class="contentBx">
              <h2>Android Studio</h2>
            </div>
          </div>
        </div>

        <div className='columnskills'>
          <div class="card">
            <div class="imgBx">
              <img src={mongodbIcon} alt="Mongodb Icon" />
            </div>
            <div class="contentBx">
              <h2>MongoDB</h2>
            </div>
          </div>
        </div>

        <div className='columnskills'>
          <div class="card">
            <div class="imgBx">
              <img src={tableauIcon} alt="Tableau Icon" />
            </div>
            <div class="contentBx">
              <h2>Tableau</h2>
            </div>
          </div>
        </div>

        <div className='columnskills'>
          <div class="card">
            <div class="imgBx">
              <img src={dockerIcon} alt="Docker Icon" />
            </div>
            <div class="contentBx">
              <h2>Docker</h2>
            </div>
          </div>
        </div>
      </div>











    </div>
  )
}

export default Technology