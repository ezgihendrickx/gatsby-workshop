import React from "react"
import "./contact.styles.scss"

function Contact() {
  return (
    <div className="contact">
      <img
        className="telephone"
        src="./img/phone.svg"
        alt="telephone icon"
      ></img>
      <h2>CONTACT</h2>
      <div className="icons">
        <a
          className="linear"
          href="https://www.linkedin.com/in/ezgi-hendrickx-0a897b15b/"
          target="blank_ "
          rel="noreferrer"
        >
          <img
            className="linkedin"
            src="./img/linkedin.svg"
            alt="linkedin icon"
          />
        </a>
        <a
          href="https://twitter.com/ezgihendrickx"
          target="_blank"
          rel="noreferrer"
        >
          <img className="twitter" src="./img/twitter.svg" alt="twitter icon" />
        </a>
        <div>
          <a
            href="mailto:ezgihendrickx@gmail.com?&subject=About%20.."
            target="_top"
            rel="noreferrer"
          >
            <img className="email" src="./img/email.svg" alt="email icon" />
          </a>
          <a
            href="https://github.com/ezgihendrickx"
            target="_blank"
            rel="noreferrer"
          >
            <img className="github" src="./img/github.svg" alt="github icon" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
