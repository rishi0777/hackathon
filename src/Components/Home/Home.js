import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { GiFastArrow } from "react-icons/gi";
import profile from "../../assets/profile.jpg";
const Home = () => {
  return (
    <div className="cnt">
      <div className="homeIntroduction">
        <h1>Hey there! I am Rishi Mishra</h1>
        <h4>Competitive Programmer, Web Developer who loves to code</h4>
        <ul className="links">
          <li>
            Linkedin &nbsp;
            <a href="https://www.linkedin.com/in/rishi-mishra/">
              <GiFastArrow />
            </a>
          </li>
          <li>
            Github &nbsp;
            <a href="https://github.com/rishi0777">
              <GiFastArrow />
            </a>
          </li>
          <li>
            Leetcode &nbsp;
            <a href="https://leetcode.com/rishi_777/">
              <GiFastArrow />
            </a>
          </li>
        </ul>
      </div>
      <div className="homeImageContainer">
        <img className="profileImage" src={profile}></img>
      </div>
    </div>
  );
};

export default Home;
