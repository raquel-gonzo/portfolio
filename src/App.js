import React from 'react';
import './App.css';
import Header from './components/header';
import Project from './components/project';
import Connect from './components/connect';

const projects = [
  {
    image: "",
    title: "Violin Studio",
    content: "a practice journal and sheet music resource."
  },
  {
    image: "https://res.cloudinary.com/raquel-gonzo/image/upload/c_scale,w_300/v1602106263/yoga_lib_vhycnx.jpg",
    title: "Yoga Lib",
    content: "a library of yoga poses.",
  },
  {
    image: "",
    title: "proj 3",
    content: ""
  },
]

function App() {


  return (
    <div className="App">
      <Header/>
      <h2>My Code Projects</h2>
      <div id="app-container">
        {
          projects.map((project, index) => {
            console.log("project");
            console.log(project);
            return <Project project={project} key={index}/>
          })
        }
      </div>
      <Connect />
    </div>
  );
}

export default App;
