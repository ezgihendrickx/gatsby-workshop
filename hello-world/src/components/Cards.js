import React from "react"
import "./cards.styles.scss"

function Cards(props) {
  return (
    <div className="cards">
      <h3>{props.head}</h3>
      <div>
        <p align="left" className="badges">
          <a
            href={props.tailwind}
            target="_blank"
            rel="noreferrer"
            className="a1"
          >
            <img alt="Badge Tailwindcss" src={props.tailwindimg} />
          </a>
          &nbsp;
          <a href={props.react} target="_blank" rel="noreferrer" className="a1">
            <img alt="Badge ReactJS" src={props.reactimg} />
          </a>
          {/* <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
            <img
              alt="Badge Tailwindcss"
              src="https://img.shields.io/badge/TAILWIND-blue?style=flat&logo=tailwind-css"
            />
          </a>
          &nbsp;
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img
              alt="Badge ReactJS"
              src="https://img.shields.io/badge/REACT-yellow?style=flat&logo=react"
            />
          </a>
          &nbsp;
          <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
            <img
              alt="Badge Gatsby"
              src="https://img.shields.io/badge/GATSBY-purple?style=flat&logo=gatsby"
            />
          </a> */}
        </p>
        <p>{props.description}</p>
        <button>
          <strong>
            <a href={props.link} target="_blank" className="a1">
              Live
            </a>
          </strong>
        </button>
        <button>
          <strong>
            <a href={props.github} target="_blank" className="a1">
              Code
            </a>
          </strong>
        </button>
      </div>
    </div>
  )
}

export default Cards
