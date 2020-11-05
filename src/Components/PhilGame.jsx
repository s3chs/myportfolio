import React, { Component } from "react";
import "../Styles/phil.css";
import PhilCharacter from "../Images/phil.png";

export default class PhilGame extends Component {
  render() {
    return (
      <div>
        <div className="background-phil">
          <h1 className="section-title"> Philippe Buteau</h1>

          <div className="ordered-content">
            <div className="floating">
              <img src={PhilCharacter} alt="phil" />
            </div>

            <div className="skill-container">
              <h1>Skill Set</h1>
              <br />
              <div class="bar no expert" data-skill="React"></div>
              <br />
              <div class="bar back intermediate" data-skill="Javascript"></div>
              <br />
              <div class="bar front advanced" data-skill="CSS3"></div>
              <br />
              <div class="bar yes expert" data-skill="HTML5"></div>
              <br />
              <div class="bar ok expert" data-skill="NodeJS"></div>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
