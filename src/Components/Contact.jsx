import React, { Component } from "react";
import Facebook from "../Images/facebook.png";
import LinkedIn from "../Images/linked.png";
import Instagram from "../Images/instagram.png";
import Moon from "../Images/moon.png";
import OctoCat from "../Images/octocat.png";
import ContactPic from "../Images/contactpic.png";
import "../Styles/contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <div className="contact-info">
          <div className="moon-centered">
            <img className="moon" src={Moon} alt="moon-pixel" />
          </div>
          <div className="contact-title">
            <img src={ContactPic} alt="Contact" />
          </div>
          <div className="c-information">
          <a href="mailto:philippe.buteau06@gmail.com" className="emailadd">
            philippe.buteau06@gmail.com
          </a>
          <h3 className="emailadd">06 89 68 09 31</h3>
          <h3 className="emailadd">Currently living in Paris!</h3>
          </div>
          <div className="social-icons">
            <div>
              <a href="https://www.facebook.com/phil.buteau.3/">
                <img src={Facebook} alt="facebook-icon" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/philippe-buteau06">
                <img src={LinkedIn} alt="linkedin-icon" />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/phil.but/">
                <img src={Instagram} alt="instagram-icon" />
              </a>
            </div>
            <div>
              <a href="https://github.com/s3chs">
                <img src={OctoCat} alt="github-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
