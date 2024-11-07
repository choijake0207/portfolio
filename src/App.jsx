import React, { useState } from 'react'
import "./App.css"
import Gallery from './Components/Gallery'
import AboutMe from './Components/AboutMe'
import Contact from './Components/Contact'
import Skills from './Components/Skills'
import {GithubLogo, List} from "phosphor-react"

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
          <a>About Me</a>
          <a>Skills</a>
          <a>Projects</a>
          <a>Contact</a>
        </div>
        <div className="social-links">
          <a>Download Resume</a>
        </div>
      </nav>


      <AboutMe/>
      <Skills/>
      <Gallery/>
      <Contact/>
    </div>
  )
}
