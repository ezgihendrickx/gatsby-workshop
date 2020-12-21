import React from "react"
import "./skills.styles.scss"

function Skills() {
  return (
    <div className="skills">
      <div className="skillsheader">
        <img
          className="hat"
          src="./img/graduation-hat.svg"
          alt="graduation-hat"
        ></img>
        <h2>SKILLS </h2>
      </div>
      <div className="badges1">
        <div className="firstdiv">
          <div className="char">
            <img className="html" src="./img/html5.svg" alt="HTML5 badge"></img>
            <p className="htmlname">HTML</p>
          </div>
          <div className="char">
            <img className="css" src="./img/css-3.svg" alt="CSS badge"></img>
            <p className="cssname">CSS</p>
          </div>
          <div className="char">
            <img className="js" src="./img/js.jpg" alt="JS badge"></img>

            <p className="jsname">JS</p>
          </div>
          <div className="char">
            <img
              className="react"
              src="./img/react.png"
              alt="react badge"
            ></img>

            <p className="reactname">React</p>
          </div>
        </div>
        <div className="seconddiv">
          <div className="char">
            <img className="git" src="./img/git.png" alt="git badge"></img>
            <p className="gitname">Git</p>
          </div>
          <div className="char">
            <img className="vsc" src="./img/vsc.png" alt="vscode badge"></img>

            <p className="vscname">VSC</p>
          </div>
          <div className="char">
            <img
              className="sketch"
              src="./img/sketch.png"
              alt="sketch badge"
            ></img>
            <p>Sketch</p>
          </div>
          <div className="char">
            <img
              className="figma"
              src="./img/figma.png"
              alt="figma badge"
            ></img>
            <p className="figmaname">Figma</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
