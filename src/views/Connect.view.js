import React from "react";

const ConnectView = () => {
  const linkedIn = (e) => {
    e.preventDefault();
    window.open("https://www.linkedin.com/in/rgonzalezviolin");
  };

  const gitHub = (e) => {
    e.preventDefault();
    window.open("https://github.com/raquel-gonzo");
  };
  return (
    <div >
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
          <i id="linkedIn" onClick={linkedIn} className="fab fa-linkedin fa-3x"></i>
          <i id="gitHub" onClick={gitHub} className="fab fa-github-square fa-3x"></i>
        </div>
      </div>
    </div>
  );
};

export default ConnectView;
