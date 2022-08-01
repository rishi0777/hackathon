import React from "react";
import "./Project.css";
import { GoMarkGithub } from "react-icons/go";

const Project = () => {
  return (
    <div className="cnt">
      <div className="project">
        <h1>Projects</h1>
        <h2>Diary | Java, Spring-Boot, JPARepository, ReactJs | § </h2>
        <p>
          • Created a website diary using which user can very easily keep track
          of their day to day ’s work.
          <br />• Users can visit the website and create the todos when required
          they can can also update them and once completed they can delete them.
          <br />
          • Used MySql database to keep track of all todos, React js for
          front-end and Spring Boot for back-end
          <br />• It also provides real time searching that is as soon as user
          types anything in the search-box the data that matches to the content
          gets rendered on the screen
          <br />
          <strong>
            • Link &nbsp;
            <a href="https://github.com/rishi0777/Diary">
              <GoMarkGithub />
            </a>
          </strong>
        </p>
        <h2>Snake Mania | Html, CSS, JavaScript | §</h2>
        <p>
          • Snake is a 2D game hosted on Heroku. <br />
          • Created by using HTML, CSS and JavaScript. <br />• It has music
          support and it is fully responsive
          <br />
          <strong>
            • Link &nbsp;
            <a href="https://github.com/rishi0777/Snake-JavaScript">
              <GoMarkGithub />
            </a>
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Project;
