import React, { Component } from "react";
import "../Styles/phil.css";
import PhilCharacter from "../Images/phil.png";
import WebDev from "../Images/webdev.png";
import PhilYo from "../Images/yophil.png";

export default class PhilGame extends Component {
  render() {
    return (
      <div>
        <div className="background-phil">
          <div className="phil-title-place">
            <img src={PhilYo} alt="title" className="phil-title" />
            <img src={WebDev} alt="title" className="web-dev" />
          </div>

          <div className="ordered-content">
            <div className="floating">
              <img className="my-avatar" src={PhilCharacter} alt="phil" />
            </div>

            <div className="skill-container">
              <h1>Skill Set</h1>
            
              <div class="bar good" data-skill="React"></div>
              <br />
              <div class="bar intermediate" data-skill="Javascript"></div>
              <br />
              <div class="bar advanced" data-skill="CSS3"></div>
              <br />
              <div class="bar expert" data-skill="HTML5"></div>
              <br />
              <div class="bar noob" data-skill="NodeJS"></div>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
