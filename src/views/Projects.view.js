import React from "react";
import Project from "../components/project";

const ProjectsView = () => {

  const projects = [
    {
      image:
        "https://res.cloudinary.com/raquel-gonzo/image/upload/c_scale,w_350/v1611549131/wonderful-weather-preview.png",
      title: "Wonderful Weather",
      content: "A weather app made with Vuejs and OpenWeatherAPI. Search by zip code or your city. Toggle between Fahrenheit and Celsius.",
      link: "https://wonderful-weather.netlify.app/",
    },
    {
      image:
        "https://res.cloudinary.com/raquel-gonzo/image/upload/c_scale,w_350/v1608444715/portfolio-tandem-preview.png",
      title: "Tandem Trivia",
      content:
        "A trivia game created for Tandem's Software Engineer Apprenticeship (October 2020). Created with React, Hooks, Cloudinary, and Bootstrap.",
      link: "https://tandem-for-400.netlify.app/",
    },
    {
      image:
        "https://res.cloudinary.com/raquel-gonzo/image/upload/c_scale,w_350/v1604634338/circle-of-fifths-thumbnail.png",
      title: "Interactive Circle of Fifths",
      content:
        "A clickable circle of fifths for musicians to practice their major and minor scales. Made with React, Cloudinary, and Flat.io. Image mapping done at www.image-map.net",
      link: "https://circle-of-fifths.netlify.app/",
    },
    {
      image:
        "https://res.cloudinary.com/raquel-gonzo/image/upload/c_scale,w_350/v1602552612/student-portal_ttilgr.jpg",
      title: "Violin Studio",
      content:
        "Violin studio is an app that keeps track of a student's practice journal for their music lessons, and has interactive sheet music the student portal. This app is created with React, Express, Node, MongoDB Atlas, JWT, and Flat.io.",
      link: "https://violin-studio.herokuapp.com/",
    },
    {
      image:
        "https://res.cloudinary.com/raquel-gonzo/image/upload/c_thumb,w_350,g_face/v1602106263/yoga_lib_vhycnx.jpg",
      title: "Yoga Lib",
      content:
        "Browse yoga poses to create your own flow and filter your preferences. Using a yoga pose API created by @rebeccaestes, users can browse a library of yoga poses to create their own flow. Made with React and Bootstrap, currently hosted on Netlify. Images by Claire Jones.",
      link: "https://yoga-gen.netlify.app/",
    },
    {
      image:
        "https://res.cloudinary.com/raquel-gonzo/image/upload/c_scale,w_350/v1603316676/skullies_fhcyky.png",
      title: "Skully Match",
      content:
        "Match the sugar skulls. A memory card game made with React and Cloudinary. Originally done in vanilla JavaScript, HTML and CSS, the game uses hooks to manage state and shuffling the deck.",
      link: "https://react-memory-skullies.netlify.app/",
    }
  ];

  return (
    <div>
      <h2>My Code Projects</h2>
      <div 
      id="proj-display-style"
      >
        {projects.map((project, index) => {
          return <Project project={project} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsView;
