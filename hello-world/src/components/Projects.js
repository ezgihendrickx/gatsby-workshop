import React from "react"
import "./projects.styles.scss"
import Cards from "./Cards"

function Projects() {
  return (
    <div className="projects">
      <img className="folder" src="./img/folder.svg" alt="folder" />
      <h2>PROJECTS</h2>

      <Cards
        head="Todo List"
        tailwind="https://tailwindcss.com/"
        tailwindimg="https://img.shields.io/badge/TAILWIND-blue?style=flat&logo=tailwind-css"
        react="https://reactjs.org/"
        reactimg="https://img.shields.io/badge/REACT-yellow?style=flat&logo=react"
        description="This is my first Todo List with React.(React-Hooks are used.)"
        link="https://reactezgi.netlify.app/"
        github="https://github.com/ezgihendrickx/intro-react"
      />
      <Cards
        head="Weather App"
        tailwind="https://developer.mozilla.org/en-US/docs/Web/CSS"
        tailwindimg="https://img.shields.io/badge/Vanilla CSS-blue?style=flat&logo=CSS"
        react="https://www.javascript.com/"
        reactimg="https://img.shields.io/badge/Vanilla JS-yellow?style=flat&logo=javascript"
        description="This is my first Weather App with Vanilla JS and Rest API.	&nbsp;&nbsp;&nbsp;&nbsp;  "
        link="https://ezgihendrickx.github.io/modern-javascript-application/"
        github="https://github.com/ezgihendrickx/modern-javascript-application"
      />
      <Cards
        head="Real Estate"
        tailwind="https://tailwindcss.com/"
        tailwindimg="https://img.shields.io/badge/TAILWIND-blue?style=flat&logo=tailwind-css"
        react="https://reactjs.org/"
        reactimg="https://img.shields.io/badge/REACT-yellow?style=flat&logo=react"
        description="This is my first real-life real-estate website project with React."
        link="https://antalyadomhomes.com/"
        github="https://github.com/ezgihendrickx/realestate-react"
      />
    </div>
  )
}

export default Projects
