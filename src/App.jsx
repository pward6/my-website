import React from 'react';
import About from './components/About';
import Project from './components/Project';
import './App.css';

const App = () => {
  return (
    <div>
      <div className='app-container'>
        <About />
        <Education />
        <WorkExperience />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default App;
