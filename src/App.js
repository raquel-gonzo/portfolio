import React from "react";
import "./App.css";
import Home from "./components/Home.view";
import ProjectsView from "./components/Projects.view";
import ConnectView from "./components/Connect.view";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <ProjectsView path="/projects" />
        <ConnectView path="/connect" />
      </Router>
    </div>
  );
}

export default App;
