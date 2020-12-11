import React, { Component } from "react"
import "./header.styles.scss"

export default class ScrollingHeader extends Component {
  //This component gonna be a stateful component
  constructor(props) {
    super(props) // call the parent

    this.state = {
      //call the state
      isMin: false, //it tells header should be minimize or not
    }
  }

  render() {
    return (
      <div className="scrolling-header">
        <h1>
          {" "}
          <code>Ezgi/></code>
          <img className="furby" src="./img/furby.svg" alt="furby icon"></img>
        </h1>
      </div>
    )
  }
}
