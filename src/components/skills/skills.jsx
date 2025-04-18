import React from "react";
import grid1 from "../../assets/images/Shared goals-bro 1 (1).png";
import grid2 from "../../assets/images/Typewriter-bro 1.png";
import grid3 from "../../assets/images/House bookshelves-bro 1.png";
import grid4 from "../../assets/images/Podcast audience-bro 1.png";

const Skills = () => {
  return (
    <div className="container skills">
      <h2>Skills</h2>
      <div class="parent">
        <div class="div1">
          <img src={grid1} alt="grid1" />
          <h3>Speaking</h3>
          <br />
          <p>
            Improve your English skills and confidence. Live classes and
            interactive lessons online. 20% extra free for a limited time only
            <br />
            <br />
            Learn English online and improve your skills through our
            high-quality courses and resources – all designed for adult language
            learners.
          </p>
          <br />
          <div className="button2">Learn more</div>
        </div>
        <div class="div2">
          <img src={grid2} alt="grid2" />
        </div>
        <div class="div3">
          <img src={grid3} alt="grid3" />
        </div>
        <div class="div4">
          <img src={grid4} alt="grid4" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
