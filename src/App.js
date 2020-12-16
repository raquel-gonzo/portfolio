import React from "react";
import "./App.css";
import Home from "./views/Home.view";
import ProjectsView from "./views/Projects.view";
import ConnectView from "./views/Connect.view";
import NavBar from "./components/NavBar"
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App" id="appjs-container" >
      <NavBar />
      <Router>
        <Home path="/" />
        <ProjectsView path="/projects" />
        <ConnectView path="/connect" />
      </Router>
    </div>
  );
}

export default App;
