import React, { useState } from 'react'
import "./App.css"
import Gallery from './Components/Gallery'
import AboutMe from './Components/AboutMe'
import Contact from './Components/Contact'
import Skills from './Components/Skills'
import {GithubLogo, List, Hand} from "phosphor-react"

export default function App() {
  const [sideNavView, setSideNavView] = useState(false)
  return (
    <div className="portfolio">


      <header className="header">
        <a id="github-link" href="https://github.com/choijake0207">
          <GithubLogo size="1.5em"/>
          choijake0207
        </a>
        <button 
            className="nav-toggle"
            onClick={() => setSideNavView(!sideNavView)}
        >
          <List size="2em"/>
        </button>
      </header>


      <nav className={`side-nav ${sideNavView ? "visible" : ""}`}>
        <div className="nav-links">
          <a href="#About">About</a>
          <a href="#Skills">Skills</a>
          <a href="#Gallery">Projects</a>
          <a href="#Contact">Contact</a>
        </div>
        <div className="social-links">
          <a>My Resume</a>
        </div>
      </nav>


      <AboutMe/>
      <Gallery/>
      <Skills/>
 
      <Contact/>
    </div>
  )
}
