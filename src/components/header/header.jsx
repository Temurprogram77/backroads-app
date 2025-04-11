import React from "react";
import header_image from '../../assets/images/Learning languages-bro 1.png'

const Header = () => {
  return (
    <div className="container header">
      <div className="left-part-header">
        <h2>Learn <br /> Any Foreign Language</h2>
        <p>
          With our teachers who write a program for each student, you will be
          able to make your first sketch after the first lesson.
        </p>
        <div className="button">Get started</div>
      </div>
      <div className="right-part-header">
        <img src={header_image} alt="" />
      </div>
    </div>
  );
};

export default Header;
