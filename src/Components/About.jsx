import React, { Component } from "react";
import "../Styles/about.css";
import PhilStory from "../Images/philstory.png";
import Pr from "../Images/newspaper.png";
import QuestionMark from "../Images/questionmark.png";
import Star from "../Images/star.png";


export default class About extends Component {
  render() {
    return (
      <div>
        <div className="about-section">
        <div className="centered-element">
          <h1 className="title">ABOUT ME</h1>
          <img className="phil-story-pic"src={PhilStory} alt="phil8bit"/>
          </div>
          <div className="ordered-about">
            <div className="ordered-story">
            <img src={Pr} alt="newspaper"/>
              <p>
                My name is Philippe Buteau and I'm 27 years old. I used to work in
                Public Relations, firstly in the fashion industry, secondly in the Tech industry. My greatest strength is my motivation !
              </p>
            </div>
            <div className="ordered-story">
            <img src={QuestionMark} alt="question"/>
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
            <img src={Star} alt="star"/>
              <p>
                My dream goal: I would like to find a job as a Front-End
                Developer, in which I will learn new things
                everyday.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
