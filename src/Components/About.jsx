import React, { Component } from "react";
import "../Styles/about.css";
import PhilStory from "../Images/philprofil.jpg";
import AboutPic from "../Images/about.png"

export default class About extends Component {
  render() {
    return (
      <div id="about">
        <div className="about-section">
          <div className="centered-element">
            <img className="about-pic" src={AboutPic} alt=""/>
          </div>
          <div className="philDiv">
            <img className="phil-story-pic" src={PhilStory} alt="philippe" />
          </div>
          <div className="ordered-about">
            <div className="ordered-story">
              <p>
                My name is Philippe Buteau and I'm 27 years old. I used to work
                in Public Relations, firstly in the fashion industry, secondly
                in the tech industry.
              </p>
            </div>
            <div className="ordered-story">
              <p>
                I decided to make a shift in my career when I was in charge of
                GitHub's Public Relations. To do so, I enrolled in Iron Hack's
                Paris Web Development bootcamp to learn how to code. After 2
                months and 400 hours of intensive programming courses, I am now
                able to create websites using HTML, Javascript, CSS, React,
                NodeJS...
              </p>
            </div>
            <div className="ordered-story">
              <p>
                My dream goal now is to find a job as a Front-End Developer, in
                which I will learn new things everyday.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
