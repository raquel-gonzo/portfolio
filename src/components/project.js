import React from "react";
import Collapsible from "react-collapsible";

const Project = ({ project }) => {
  return (
      <Collapsible 
        trigger={project.title}
        className="text-containers border-style"
      >
        <div>
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
      </Collapsible>
  );
};

export default Project;
