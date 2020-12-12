import React from 'react';

const Project = ({ project }) => {
    return(
        <div className="project-card">
            <a href={project.link} ><img src={project.image} alt="a preview of X project" className="proj-img"/></a>
            <h3>{project.title}</h3>
            <p>{project.content}</p>
        </div>
    )
}

export default Project;