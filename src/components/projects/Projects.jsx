import React from 'react'
import './projects.css'
import movieReviewsPic from '../../assets/movie-reviews_picture.JPG'
import ezfittrainerPic from '../../assets/ezfittrainer_picture.JPG'
import messagingAppPic from '../../assets/messagingappPic.png'
import giphyClonePic from '../../assets/giphyclone_picture.JPG'

const Projects = () => {
  return (
    <div><h1>Projects</h1>
      <div className='container1'>
      <section className='carousel' aria-label="Gallery">
         <ol class="carousel__viewport">
    <li id="carousel__slide1"
        class="carousel__slide">
      <div class="carousel__snapper">
      <div class="card">
            <div class="imgBx">
              <img src={movieReviewsPic} alt="Movie Review site project" />
            </div>
            <div class="contentBx">
              <h7>This is a Full-Stack site that uses the MERN stack. The website allows users to search for movies, review them, and make changes or deletions as necessary.</h7>
            </div>
          </div>
      </div>
    </li>
    <li id="carousel__slide2"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <div class="card">
            <div class="imgBx">
              <img src={ezfittrainerPic} alt="fitness Training Application" />
            </div>
            <div class="contentBx">
              <h7>I developed an Android app using Kotlin and JS that enables users to track their workouts, calculate calories burned, and compare their progress with the previous day.</h7>
            </div>
          </div>
    </li>
    <li id="carousel__slide3"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <div class="card">
            <div class="imgBx">
              <img src={messagingAppPic} alt="Online Messaging website" />
            </div>
            <div class="contentBx">
              <h7>I developed a messaging web application that facilitates communication between multiple users through the use of sockets, TypeScript, Angular.JS, and JS.</h7>
            </div>
          </div>

    </li>
    <li id="carousel__slide4"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      


      <div class="card">
            <div class="imgBx">
              <img src={giphyClonePic} alt="Giphy website" />
            </div>
            <div class="contentBx">
              <h7>Created a customized version of the Giphy website, utilizing Giphy's API to retrieve images. 
                JS and PHP were leveraged to facilitate user requests and enable the loading of additional images.</h7>
            </div>
          </div>
    </li>
  </ol>
  <aside class="carousel__navigation">
    <ol class="carousel__navigation-list">
      <li class="carousel__navigation-item">
        <a href="#carousel__slide1" class="carousel__navigation-button">Go to slide 1</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide2" class="carousel__navigation-button">Go to slide 2</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide3" class="carousel__navigation-button">Go to slide 3</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide4" class="carousel__navigation-button">Go to slide 4</a>
      </li>
    </ol>
  </aside>
          </section>
      </div>
    </div>
  )
}

export default Projects