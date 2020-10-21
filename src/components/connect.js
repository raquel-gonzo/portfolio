import React from "react";

const Connect = () => {
  const linkedIn = () => {
    window.open("https://www.linkedin.com/in/rgonzalezviolin");
  };

  const gitHub = () => {
    window.open = () => {
      "https://github.com/raquel-gonzo";
    };
  };
  return (
    <div id="connect-container">
      <h2>Contact</h2>
      <div id="connect">
        <p>
          Feel free to contact me at{" "}
          <a href="mailto:gonzalez.rachel.c@gmail.com">
            gonzalez.rachel.c@gmail.com
          </a>{" "}
          regarding freelance web development or music. Thanks for visiting!
        </p>
        <div id="icons">
          <i onClick={linkedIn} className="fab fa-linkedin fa-3x"></i>
          <i onClick={gitHub} className="fab fa-github-square fa-3x"></i>
        </div>
      </div>
    </div>
  );
};

export default Connect;
