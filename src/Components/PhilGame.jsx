import React, { Component } from "react";
import "../Styles/phil.css";
import PhilCharacter from "../Images/phil.png";
import PhilTitle from "../Images/philtypo.png";

export default class PhilGame extends Component {
  render() {
    return (
      <div>
        <div className="background-phil">
          <div className="phil-title-place">
            <img src={PhilTitle} alt="title" className="phil-title" />
          </div>

          <div className="ordered-content">
            <div className="floating">
              <img className="my-avatar" src={PhilCharacter} alt="phil" />
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
