import React, { Component } from "react";
import Musica from "../Images/Musica.png";
import RetroCulture from "../Images/Retroculture.png";
import SafeSpace from "../Images/Safespace.png";
import ProjectPic from "../Images/projectspic.png";
import RetroCulturePic from "../Images/retroculturepic.png";
import SafeSpacePic from "../Images/safespacepic.png";
import MusicaPic from "../Images/musicapic.png";
import "../Styles/projects.css";
import { Button } from "nes-react";

export default class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <div className="projects-section">
          <img className="project-title" src={ProjectPic} alt="project-pic" />


          <div className="project-container">
            <div>
              <a href="https://s3chs.github.io/Video-game-quizz/">
                <img
                  className="project-pic"
                  src={RetroCulture}
                  alt="RetroCulture"
                />
              </a>
            </div>

            <div className="text-container">
              <div className="centered-pic">
                <img src={RetroCulturePic} alt="retro-culture-pic" />
              </div>
              <h3>Front-end game application</h3>
              <h4>Technologies: HTML5, CSS3 and Javascript</h4>
              <p>
                Retro Culture is a quizz based on old school gaming. This game
                will allow you to test your knowledge about video games.
<br/>
                35 questions, 4 choices, one answer!
              </p>
              <div className="btn-centered">
              <a href="https://s3chs.github.io/Video-game-quizz/"><Button className="is-rounded"> Website </Button></a>
              </div>
            </div>
          </div>

          <div className="project-container">
            <div>
              <a href="https://safe-space-ironhack.herokuapp.com/">
                <img className="project-pic" src={SafeSpace} alt="Safe-Space" />
              </a>
            </div>

            <div className="text-container">
              <div className="centered-pic">
                <img
                  className="text-container"
                  src={SafeSpacePic}
                  alt="Safe-Space"
                />
              </div>
              <h3>Front and Back-end responsive website</h3>
              <h4>
                Technologies: HTML5, CSS3, JavaScript, Handlebars, MongoDB,
                Mongoose, Express.JS, Semantic UI
              </h4>
              <p>
                Safe Space is a responsive website allowing individuals to
                prevent/inform/report apast aggression. This project was made
                with my colleague Bouziane Bey and Laura Caillaux
              </p>
              <div className="btn-centered">
              <a href="https://safe-space-ironhack.herokuapp.com/"><Button className="is-rounded"> Website </Button></a>
              </div>
            </div>
          </div>

          <div className="project-container">
            <div>
              <a href="https://musicaih.herokuapp.com/">
                <img className="project-pic" src={Musica} alt="Musica" />
              </a>
            </div>

            <div className="text-container">
              <div className="centered-pic">
                <img src={MusicaPic} alt="Musica" />
              </div>
              <h3>Full MERN Stack Application</h3>
              <h4>
                Technologies: HTML5, CSS3, JavaScript, MongoDB, Mongoose,
                Express.JS, React.JS, React Semantic UI.
              </h4>
              <p>
                Musica is a website allowing musicians to connect
                with their peers! Users can find musicians to play with,
                register their band and even search for bands that are looking
                for members. This project was made with my colleague Bouziane
                Bey.
              </p>
              <div className="btn-centered">
                <a href="https://musicaih.herokuapp.com/"><Button className="is-rounded"> Website </Button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}