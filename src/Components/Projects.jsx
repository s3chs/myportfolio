import React, { Component } from "react";
import Musica from "../Images/Musica.png";
import RetroCulture from "../Images/Retroculture.png";
import SafeSpace from "../Images/Safespace.png";
import "../Styles/projects.css";

export default class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <div className="projects-section">
          <h1 className="title">PROJECTS</h1>

          <div className="project-container">
            <div>
            <a href="https://s3chs.github.io/Video-game-quizz/">
              <img className="project-pic" src={RetroCulture} alt="RetroCulture"/>
              </a>
            </div>

            <div className="text-container">
              <h2>Retro Culture</h2>
              <h3>Front-end game application</h3>
              <h4>Technologies: HTML5, CSS3 and Javascript</h4>
              <p>
                Retro Culture is a quizz based on old school gaming. This game
                will allow you to test your knowledge about video games!
              </p>
            </div>
          </div>

          <div className="project-container">
            <div>
            <a href="https://safe-space-ironhack.herokuapp.com/">
              <img className="project-pic" src={SafeSpace} alt="Musica" />
              </a>
            </div>

            <div className="text-container">
              <h2>Safe Space</h2>
              <h3>Front and Back-end responsive website</h3>
              <h4>
                Technologies: HTML5, CSS3, JavaScript, Handlebars, MongoDB,
                Mongoose, Express.JS, Semantic UI
              </h4>
              <p>
                Safe Space is a responsive website allowing individuals to
                prevent/inform/report a past aggression. By locating a place on
                the map, one can choose to tell about a past assault, this
                allows users of the site to be warned and avoid a dangerous
                place at a certain time for example. In addition to this,
                associations can list themselves on the website to offer help to
                people who have been victims of aggression.
              </p>
            </div>
          </div>

          <div className="project-container">
            <div>
            <a href="https://musicaih.herokuapp.com/">
              <img className="project-pic" src={Musica} alt="Musica" />
              </a>
            </div>

            <div className="text-container">
              <h2>Musica</h2>
              <h3>Full MERN Stack Application</h3>
              <h4>
                Technologies: HTML5, CSS3, JavaScript, MongoDB, Mongoose,
                Express.JS, React.JS, React Semantic UI.
              </h4>
              <p>
                Musica is a website/application allowing musicians to connect
                with their peers! Users can find musicians to play with,
                register their band and even search for bands that are looking
                for members. This project was made with my colleague Bouziane
                Bey.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
