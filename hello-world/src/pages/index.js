import React, { Component } from "react"
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import "./index.styles.scss"

class Home extends Component {
  // state = {
  //   callme: "Ezgi",
  // }

  // callmeChangedHandler = event => {
  //   this.setState({ callme: event.target.value })
  // }

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />

        {/* <UserOutput userName="ezgi" /> */}
      </div>
    )
  }
}
export default Home
