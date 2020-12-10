import React from "react"
import "./about.styles.scss"

function About() {
  return (
    <div className="about">
      <img className="reindeer" src="./img/reindeer.svg" alt="reindeer"></img>
      <h2>ABOUT </h2>
      <div>
        <img
          className="profile"
          src="./img/meblack&white.jpg"
          alt="profilephoto"
        ></img>
      </div>

      <div className="aboutme">
        <h3 className="header3">Hello there, I'm Ezgi!</h3>
        <div className="bio">
          <p>
            {" "}
            I am currently looking for my next challenge as a Front-End
            Developer, having expertise in both Web Development and UI/UX
            design. After moving to Belgium I decided to return to my passion
            about design & advertising and further build upon my university
            studies in Communication Arts.
          </p>

          <p>
            After an internship as UI/UX designer at an ambitious start-up
            company within EY, I am currently at the end of an intensive 7 month
            Education in Web Development @BeCode.
          </p>
          <p>
            During my stay in Stockholm, Sweden, I got fascinated by Nordic
            design and since then I integrate minimalist design principles in
            many of my projects.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
