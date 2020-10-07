import React from 'react';

const Project = ({ project }) => {
    // props.project
    return(
        <div className="project-card">
            <img src={project.image} alt="a preview of X project" />
            <h3>{project.title}</h3>
            <p>{project.content}</p>
        </div>
    )
}

export default Project;