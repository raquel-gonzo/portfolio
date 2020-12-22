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
            I am a Software Developer knowledgable in Full-Stack development. I like working on projects related to responsive front-end development and using modern Javascript frameworks. I love learning new things and applying them in my personal and professional work. 
            I live in Chicago, IL and I'm currently looking for a new role in the Software Development field. I'm a proud member of #LatinasInTech and #Techqueria <span role="img" aria-label="Mexican flag emoji">🇲🇽</span> 
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
