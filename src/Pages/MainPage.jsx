import React, { Component } from "react";
import Header from "../Components/Header";
import PhilGame from "../Components/PhilGame";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";


export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <PhilGame />
        <About />
        <Projects />
        <Contact />

      </div>
    );
  }
}
