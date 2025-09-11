import React from 'react'
import ProjectData from '../../data/projects-data.json'

const ProjectList = () => {
  return (
    <section className="projects" id='projects'>
      <h2 className='projects__title'>MES PRO<span>JETS</span></h2>
      <div className="projects__list">
        {ProjectData.map((project, index) => (
          <div key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" >
              <img src={project.image} alt={project.title} className="project__list--img" />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectList