import React from "react";

const Project = ({ project }) => {
  return (
    <div className="project-card">

      <div className="proj-text">
        <h3>{project.title}</h3>
        <p>{project.content}</p>
      </div>

      <div className="proj-img">
        <a href={project.link}>
          <img
            src={project.image}
            alt="a preview of X project"
            className="proj-img"
          />
        </a>
      </div>

    </div>
  );
};

export default Project;
