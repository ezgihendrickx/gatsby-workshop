import React, { Component } from "react"
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import "./index.styles.scss"

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
export default Home
