import React from 'react'
import { skills } from './data'

export default function Skills() {
  return (
    <section className="section" id="Skills">
        {
            skills.map(skill => {
                return (
                    <div className="skill">
                        <img className="skill-logo" src={skill.imageURL}/>
                    </div>
                )
            })
        }
      
    </section>
  )
}
