import React from 'react'
import { projects } from './projectList'


function Project({projectName, skills, description, imageURL, liveStatus}) {

    return (
        <div className="project" id={projectName}>
            <img className="demo-pic" src={imageURL}/>
            <div className="project-info">
                <h1>{projectName}</h1>
                <p>{description}</p>
                {
                    skills.map((skill, index) => {
                        return (
                            <p className="project-skill" key={index}>
                                {skill}
                            </p>
                        )
                    })
                }
                <div className="project-links">
                    <button className={liveStatus ? "live demo-link" : "demo-link"}>View Demo</button>
                    <button className="code-link">View Code</button>
                </div>
            </div>
        </div>
    )
}




export default function Gallery() {
  return (
    <section className='section' id="Gallery">
        {projects.map(project => {
            return (
                <Project
                    key={project.id}
                    projectName={project.projectName}
                    skills={project.skills}
                    description={project.description}
                    liveStatus={project.liveStatus}
                    imageURL={project.imageURL}
                />
            )
        })}
      
    </section>
  )
}
