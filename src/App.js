import React from 'react';
import './App.css';
import Header from './components/header';
import Project from './components/project';
import Connect from './components/connect';

function App() {
  return (
    <div className="App">
      <Header/>
      <h2>My Code Projects</h2>
      <div id="app-container">
        <Project />
        <Project />
        <Project />
      </div>
      <Connect />
    </div>
  );
}

export default App;
