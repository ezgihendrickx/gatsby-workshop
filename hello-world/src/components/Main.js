import React from "react"
import "./main.styles.scss"
import Projects from "./Projects"
import Contact from "./Contact"
import Skills from "./Skills"
import About from "./About"

function Main() {
  return (
    <div className="main">
      <div className="p.file">
        <Projects />
      </div>
      <div className="c.file">
        <Contact />
      </div>
      <div className="s.file">
        <Skills />
      </div>
      <div className="a.file">
        <About />
      </div>
    </div>
  )
}

export default Main
