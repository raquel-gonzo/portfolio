import React from 'react';
import './App.css';
import Header from './components/header';
import Project from './components/project';
import Connect from './components/connect';

const projects = [
  {
    title: "Violin Studio",
    content: "a practice journal and sheet music resource."
  },
  {
    title: "Yoga Lib",
    content: "a library of yoga poses."
  },
  {
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
