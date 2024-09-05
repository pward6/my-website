import React from "react";
import './Main.css';
import picture from '../images/gorrila.jpg';

function AboutMe() {
    return (
        <div>
            <h3>About me!</h3>
            <p>
                I'm a junior pursuing Computer Engineering at the University of Nebraska Lincoln.
                This summer, I worked as a software development intern at Shyft Solutions LLC in Omaha, NE.
                I'm passionate about software development and am always trying to learn something new and challenging.
            </p>
            <h3>What I'm currently working on:</h3>
            <p>
                This website! This is a good way for me to learn React, JS, and CSS so I'm kind of picking things up as I go.
                I'm also busy with schoolwork and learning about custom computer vision models.
            </p>
        </div>
    );
}

export default function About() {
    return (
        <div className="about-container">
            <div className="text-section">
                <h1>Hello!</h1>
                <h2>My name is Preston Ward</h2>
                <p>I'm interested in backend development and Machine Learning. (...and I'm trying frontend)</p>
                <AboutMe />
            </div>
            <div className="right-section">
                <img src={picture} alt="Preston Ward" />
            </div>
        </div>
    );
}
