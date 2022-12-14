import React from "react";
import { GiFastArrow } from "react-icons/gi";
import "./About.css";
const About = () => {
  return (
    <div className="cnt">
      <div className="aboutIntroduction">
        <h1>Hey there! I am Rishi Mishra</h1>
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like). Where
          does it come from? Contrary to popular belief, Lorem Ipsum is not
          simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage.
        </p>
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
    </div>
  );
};

export default About;
