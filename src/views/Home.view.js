import React from "react";
import { Image } from "cloudinary-react";

const Home = () => {
  return (
    <div>
      <div id="header">
        <Image
          publicId="smaller-violin-photo.jpg"
          cloud_name="raquel-gonzo"
          height="400"
          width="267"
          className="rounded-lg border-style"
          alt="Rachel Gonzalez and her violin."
        ></Image>
        <div className="text-containers border-style">
          <h1>Hi, I'm Rachel!</h1>
          <p>
            I am a recent coding bootcamp grad, knowledgable in React and Node,
            looking for her first tech role in front end or full stack
            development. I am passionate about music and about sharing knowledge
            with others, making it accessible to everyone.
          </p>

          <p>
            I recently completed a 16 week accelerated coding bootcamp at Coding
            Dojo, which helped me to enhance my knowledge of full stack web
            development. I'm looking forward to joining a collaborative team
            where I can share my skills and knowledge of front end development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
