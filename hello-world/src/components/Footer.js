import React from "react"
import "./footer.styles.scss"

function Footer() {
  return (
    <div className="copyright">
      <p>
        © 2021, Built with{" "}
        <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
          {" "}
          Gatsby
        </a>
      </p>
    </div>
  )
}

export default Footer
