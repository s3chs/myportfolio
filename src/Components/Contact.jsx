import React, { Component } from "react";
import Facebook from "../Images/facebook.png";
import LinkedIn from "../Images/linked.png";
import Instagram from "../Images/instagram.png";
import "../Styles/contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <div className="contact-info">
          <h1 className="title">CONTACT</h1>
          <h2 className="emailadd">Philippe Buteau</h2>
          <h3 className="emailadd">E-mail: philippe.buteau06@gmail.com</h3>
          <h3 className="emailadd">Phone number: 06 89 68 09 31</h3>
          <h3 className="emailadd">Address: Currently living in Paris!</h3>
          <div className="social-icons">
          <div>
            <a href="">
              <img src={Facebook} alt="facebook-icon" />
            </a>
            </div>
            <div>
            <a href="">
              <img src={LinkedIn} alt="linkedin-icon" />
            </a>
            </div>
            <div>
            <a href="">
              <img src={Instagram} alt="linkedin-icon" />
            </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
