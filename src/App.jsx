import React, { useState, useEffect } from "react";
import About from './components/about/About'
import Intro from './components/intro/Intro'
import Education from './components/education/Education'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Technology from './components/technology/Technology'

const App = () => {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  const renderContent = () =>(
    <>
      
      <div className="Parallax__content__Intro"> <Intro/></div>

      <div className="Parallax__content__About"><About/></div>

      <div className="Parallax__content__Projects"><Projects/></div>

      <div className="Parallax__content__Skills"><Skills/></div>
      
      <div className="Parallax__content__Nav"><Technology/></div>

      <div className="Parallax__content__Education"><Education/></div>

      
      
      
      
      
      
      

    </>
  );

  return (
    
    <>
    <section className="Parallax">
      <div
        className="Parallax__background"
        style={{ transform: `translate(${-offsetY*.3-20}px,0px)` }}//offset whitespace background 
      />
      
      
      <div
        className="Parallax__background-eggman"
        style={{ transform: `translate(${-offsetY*1.2+900}px,${offsetY}px)` }}
      />

      <div
        className="Parallax__background-sonic"
        style={{ transform: `translate(${offsetY*1.2-1600}px,${offsetY}px)` }}
      />
      <div className="Parallax__content">{renderContent()}</div>
    </section>
      
    
    </>
    
  );
}

export default App