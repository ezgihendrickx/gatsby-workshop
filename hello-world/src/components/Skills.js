import React from "react"
import "./skills.styles.scss"

function Skills() {
  return (
    <div className="skills">
      <img
        className="hat"
        src="./img/graduation-hat.svg"
        alt="graduation-hat"
      ></img>
      <h2>SKILLS </h2>
      <div className="badges">
        <img className="html" src="./img/html5.svg" alt="HTML5"></img>
      </div>
      <div className="htmlbadge">
        <p>HTML</p>
      </div>
    </div>
  )
}

export default Skills
