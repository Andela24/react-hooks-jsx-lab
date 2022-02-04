import React from "react";
import { image } from "../data/data";

function About() {
  return <div id = "about">
    <h2>About Me</h2>
    <p> The world is bigger than you think it is and your worries aren't as important as you think they are, just be you!</p>
    <img 
    src = {image}
    alt="I made this"></img>
  </div>;
}

export default About;
