import React from "react";
import Collapsible from "react-collapsible";

const Project = ({ project }) => {
  return (
    <Collapsible
      trigger={project.title}
      triggerTagName="h3"
      triggerWhenOpen={<h1>{project.title}</h1>}
    >
        <div>
          <p>{project.content}</p>
        </div>
        <div className="proj-img">
          <a href={project.link}>
            <img
              src={project.image}
              alt="project thumbnail"
              className="proj-img"
            />
          </a>
        </div>
    </Collapsible>
  );
};

export default Project;
