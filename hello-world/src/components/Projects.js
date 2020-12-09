import React from "react"
import "./projects.styles.scss"
import Cards from "./Cards"

function Projects() {
  return (
    <div className="projects">
      <img className="folder" src="./img/folder.svg" alt="folder" />
      <h2>PROJECTS</h2>

      <Cards />
      <Cards />
      <Cards />
    </div>
  )
}

export default Projects
