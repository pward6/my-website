// src/components/Project.jsx
import React from 'react';
import './Project.css';
import picture from '../images/gorrila.jpg';

export default function Project() {
  return (
    <div className='project-container'>
      <div className='proj-text-section'>
        <h2>My Projects</h2>
        <img src={picture} alt="Project" />
        <br />
        <img src={picture} alt="Project" />
        <br />
        <img src={picture} alt="Project" />
      </div>
    </div>
  );
}
