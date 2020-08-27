import React from 'react';

const Connect = () => {
    const linkedIn = () => {
        window.open(
            "https://www.linkedin.com/in/rgonzalezviolin"
        );
    }

    const gitHub = () => {
        window.open = () => {
            "https://github.com/raquel-gonzo"
        }
    }
    return(
        <>
            <div id="connect">
                <i onClick={linkedIn} className="fab fa-linkedin fa-3x"></i>  
                <i onClick={gitHub} className="fab fa-github-square fa-3x"></i>
            </div>
        </>
    )
}

export default Connect;