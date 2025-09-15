import React from 'react'
import ProjectVideo from '../../components/ProjectVideo'
import { useParams } from 'react-router-dom'
import ProjectData from '../../data/projects-data.json'

const ProjectDetail = () => {

    const { id } = useParams();
    const project = ProjectData.find(p => p.id === parseInt(id));

    if (!project) {
        return <p>Projet introuvable</p>;
    }

    return (
        <section className="project-detail">
            <ProjectVideo url={project.url} />
            <div className="project-detail__content">
                <h2 className="project-detail__content--title">{project.title}</h2>
                <p className="project-detail__content--description">{project.description}</p>
                <p className="project-detail__content--role"><strong>Rôle :</strong> {project.role}</p>
                <p className="project-detail__content--date"><strong>Date :</strong> {project.date}</p>
            </div>
        </section>
    )
}
export default ProjectDetail