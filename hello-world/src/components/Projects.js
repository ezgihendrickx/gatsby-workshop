import React from "react"
import "./projects.styles.scss"
import Cards from "./Cards"

function Projects() {
  return (
    <div className="projects">
      <img className="folder" src="./img/folder.svg" alt="folder" />
      <h2>PROJECTS</h2>

      <Cards head="Todo List" description="This is my first Todo List" />
      <Cards head="Weather App" description="This is my first Weather App" />
      <Cards
        head="Real Estate"
        description="This is my first real-estate website"
      />
    </div>
  )
}

export default Projects
