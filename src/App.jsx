import React from 'react'
import "./App.css"
import Gallery from './Components/Gallery'
import AboutMe from './Components/AboutMe'
import Contact from './Components/Contact'
import Skills from './Components/Skills'
import {GithubLogo, List} from "phosphor-react"

export default function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <a>
          <GithubLogo/>
          choijake0207
        </a>
        <List/>
      </header>
      <AboutMe/>
      <Skills/>
      <Gallery/>
      <Contact/>
    </div>
  )
}
