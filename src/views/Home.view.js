import React from "react";
import { Image, Transformation } from "cloudinary-react";

const Home = () => {
  return (
    <div>
      <div id="header" className="flex-settings">
        <Image 
          publicId="smaller-violin-photo.jpg" 
          cloud_name="raquel-gonzo" 
          className="rounded-lg border-style"
          dpr="auto"
          responsive
          width="auto"
          crop="scale"
          responsiveUseBreakpoints="true"
          id="violin-pic"
          >
          <Transformation 
            crop="scale" />
        </Image>
        <div className="text-containers border-style" id="header-text">
          <h1>Hi, I'm Rachel!</h1>
          <p>
            I am a Software Engineer currently working at <a href="https://www.breaktech.com/" target="_blank" rel="noopener noreferrer">Breakthrough Technologies</a>. I enjoy working with modern JavaScript frameworks like React and Vue and working in the EdTech field.
          </p>

          <p>
            When I'm not coding, you can usually find me playing violin or cooking a new vegetarian recipe. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
