import React from 'react'
import ProjectData from '../../data/projects-data.json'
import Cards from '../../components/Cards'

const ProjectList = () => {
  return (
    <section className="projects" id='projects'>
      <h2 className='projects__title'>MES PRO<span>JETS</span></h2>
      <div className="projects__list">
        {ProjectData.map((project) => (
          <Cards 
          key={project.id}
          id = {project.id}
          title = {project.title}
          image = {project.image}
          title_image= {project.image_description}/>
        ))}
      </div>
    </section>
  )
}

export default ProjectList