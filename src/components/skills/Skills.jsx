import React from 'react'
import './skills.css'
import javascriptIcon from '../../assets/js.png'
import pythonIcon from '../../assets/python.png'
import javaIcon from '../../assets/java.png'
import kotlinIcon from '../../assets/kotlin.svg'
import phpIcon from '../../assets/php.png'
import typeScriptIcon from '../../assets/typescript.png'
import sqlIcon from '../../assets/sql.png'
import cplusplusIcon from '../../assets/cplusplus.png'
import rIcon from '../../assets/letterR.png'

const Skills = () => {
  return (

    <div class="container">
      <div><h1>Programming Languages</h1></div>

      <div className='row'>
        <div className='columnskills'>
          <div class="card">
            <div class="imgBx">
              <img src={javascriptIcon} alt="javascript Icon" />
            </div>
            <div class="contentBx">
              <h2>JavaScript</h2>
            </div>
          </div>
        </div>

        <div className='columnskills'>
          <div class="card">
            <div class="imgBx">
              <img src={pythonIcon} alt="Python Icon" />
            </div>
            <div class="contentBx">
              <h2>Python</h2>
            </div>
          </div>
        </div>

        <div className='columnskills'>
          <div class="card">
            <div class="imgBx">
              <img src={javaIcon} alt="Java Icon" />
            </div>
            <div class="contentBx">
              <h2>JavaScript</h2>
            </div>
          </div>
        </div>

        <div className='columnskills'>
          <div class="card">
            <div class="imgBx">
              <img src={kotlinIcon} alt="Kotlin Icon" />
            </div>
            <div class="contentBx">
              <h2>Kotlin</h2>
            </div>
          </div>
        </div>


        <div className='columnskills'>
          <div class="card">
            <div class="imgBx">
              <img src={phpIcon} alt="PHP Icon" />
            </div>
            <div class="contentBx">
              <h2>PHP</h2>
            </div>
          </div>
        </div>

        <div className='columnskills'>
          <div class="card">
            <div class="imgBx">
              <img src={typeScriptIcon} alt="typeScript Icon" />
            </div>
            <div class="contentBx">
              <h2>typeScript</h2>
            </div>
          </div>
        </div>

        <div className='columnskills'>
          <div class="card">
            <div class="imgBx">
              <img src={sqlIcon} alt="SQL Icon" />
            </div>
            <div class="contentBx">
              <h2>SQL</h2>
            </div>
          </div>
        </div>

        <div className='columnskills'>
          <div class="card">
            <div class="imgBx">
              <img src={cplusplusIcon} alt="C++ Icon" />
            </div>
            <div class="contentBx">
              <h2>C++</h2>
            </div>
          </div>
        </div>

        <div className='columnskills'>
          <div class="card">
            <div class="imgBx">
              <img src={rIcon} alt="R Icon" />
            </div>
            <div class="contentBx">
              <h2>R</h2>
            </div>
          </div>
        </div>

      </div>











    </div>
  )
}

export default Skills