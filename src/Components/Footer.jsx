import React from "react";
import "../Styles/footer.css";
import Hpic from "../Images/html.png";
import Rpic from "../Images/react.png";
import Cpic from "../Images/css.png";
import Jpic from "../Images/javascript.png";

function Footer() {
  return (
    <div>
    <div className="footer">
      <div className="ordered-footer">
        <p>Made with love and</p>
      </div>
      <div className="ordered-icons">
        <img src={Hpic} alt="html-logo" />
        <img src={Rpic} alt="react-logo" />
        <img src={Cpic} alt="css-logo" />
        <img src={Jpic} alt="javascript-logo" />
      </div>
    </div>
    </div>
  );
}

export default Footer;
