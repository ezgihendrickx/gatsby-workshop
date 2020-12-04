import React from "react"
import "./projects.styles.scss"
import Cards from "./Cards"

function Projects() {
  return (
    <div className="projects">
      <h2>
        <span role="img" aria-label="anchor emoji">
          &#9875;
        </span>{" "}
        {}
        PROJECTS
      </h2>
      <Cards />
      <Cards />
      <Cards />
    </div>
  )
}

export default Projects
