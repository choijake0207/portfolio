import React, { useState } from 'react'
import SelfImage from "../Assets/selfie.png"
import { textVersions } from './data'

export default function AboutMe() {

  const [textType, setTextType] = useState("short")
  const currentText = textVersions.find(textObj => textObj.id === textType)?.text || "";


  return (
    <section className="section" id="About">

      <div className="about-wrap">
        <div className="image-wrap">
          <img src={SelfImage}/>
        </div>


        <div className="about-content">

          <div className="text-option-button">
            <button 
              onClick={() => setTextType("short")}
              className={textType === "short" && "active"}
            >
              Short
            </button>
            <button
              onClick={() => setTextType("long")}
              className={textType === "long" && "active"}
            >
              Long
            </button>
          </div>

          <div className="about-text">
            {currentText}
          </div>

        </div>
      </div>
    </section>
  )
}
