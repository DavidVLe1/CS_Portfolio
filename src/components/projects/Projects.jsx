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
              <h2>I made a Full-Stack website where users can look for movies to review and are able to change or delete it 
                thanks to using React.JS and Node.JS for the frontend and MongoDB, Node.JS and Express.JS for the backend.</h2>
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
              <h2>I built an android app built for users to follow workout guides and calculate their calories burned 
                during exercise which can then be compared to the previous day using Kotlin and JS.</h2>
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
              <h2>I manufactured a simple messaging web app where multiple users can communicate 
                with eachother through the use of sockets, TypeScript, Angular.JS, and JS.</h2>
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
              <h2>I created a modified version of the Giphy website using Giphy's API to retrieve images while JavaScript
                 and PHP were used to get the users requests and load more images.</h2>
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