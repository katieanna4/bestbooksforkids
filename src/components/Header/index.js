import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import logoImage from "../../images/katie-blog-logo3.png"
import headerStyles from "./header.module.scss"

const Header = props => {
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
    <>
      <div className={headerStyles.jumbotron}>
        <div className={headerStyles.pageInfo}>
          <img src={logoImage}></img>
          <h1>{data.site.siteMetadata.title}</h1>
          <p>
            information text will go here. I could make this a field in
            contentful so that this message could be updated
          </p>
        </div>
      </div>
      <nav className={headerStyles.navBar}>
        <ul>
          <li>
            <Link
              style={
                props.header === "Home"
                  ? { borderBottom: "solid 2px white", marginBottom: "5px" }
                  : { border: "none" }
              }
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              style={
                props.header === "About"
                  ? { borderBottom: "solid 2px white", marginBottom: "5px" }
                  : { border: "none" }
              }
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              style={
                props.header === "Blog"
                  ? { borderBottom: "solid 2px white", marginBottom: "5px" }
                  : { border: "none" }
              }
              to="/blog"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
