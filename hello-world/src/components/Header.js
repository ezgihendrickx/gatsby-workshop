import React, { Component } from "react"
import "./header.styles.scss"
import { graphql, useStaticQuery } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className="scrolling-header">
      <h1>
        {console.log(data.site.siteMetadata.title)}
        <code>{data.site.siteMetadata.title}/></code>
        <img className="furby" src="./img/furby.svg" alt="furby icon"></img>
      </h1>
    </div>
  )
}
// export default class ScrollingHeader extends Component {
//   //This component gonna be a stateful component
//   constructor(props) {
//     super(props) // call the parent

//     this.state = {
//       //call the state
//       isMin: false, //it tells header should be minimize or not
//     }
//   }

//   render() {
//     return (
//       <div className="scrolling-header">
//         <h1>
//           {data.site.SiteMetadata.title}
//           <code>Ezgi/></code>
//           <img className="furby" src="./img/furby.svg" alt="furby icon"></img>
//         </h1>
//       </div>
//     )
//   }
// }
export default Header
