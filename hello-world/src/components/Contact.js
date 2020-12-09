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
        <img
          className="linkedin"
          src="./img/linkedin.svg"
          alt="linkedin icon"
        />
        <img className="twitter" src="./img/twitter.svg" alt="twitter icon" />

        <div>
          <img className="email" src="./img/email.svg" alt="email icon" />
          <img className="github" src="./img/github.svg" alt="github icon" />
        </div>
      </div>
    </div>
  )
}

export default Contact
