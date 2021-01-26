import React from "react";

const ConnectView = () => {
  return (
    <div id="connect">
      <h2>Connect</h2>
      <div className="text-containers border-style" id="connect-container">
        <p>
          Email me at{" "}
          <a href="mailto:gonzalez.rachel.c@gmail.com">
            gonzalez.rachel.c@gmail.com
          </a>{" "}
          regarding freelance web development or music. Thanks for visiting!
        </p>
        <div id="icons">
          <a href="https://www.linkedin.com/in/rgonzalezviolin" target="_blank" rel="noopener noreferrer" >
            <i id="linkedIn" className="fab fa-linkedin fa-3x" />
          </a>
          <a href="https://github.com/raquel-gonzo" target="_blank" rel="noopener noreferrer" >
            <i id="gitHub" className="fab fa-github-square fa-3x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConnectView;
