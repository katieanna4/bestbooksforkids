import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
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
          <h1>{data.site.siteMetadata.title}</h1>
        </div>
      </div>
      <nav className={headerStyles.navBar}>
        <ul>
          <li>
            <Link
              style={
                props.header === "Home"
                  ? { borderBottom: "solid 3px white", marginBottom: "5px" }
                  : { border: "none" }
              }
              to="/"
            >
              <span className={headerStyles.navLink}>Home</span>
            </Link>
          </li>
          <li>
            <Link
              style={
                props.header === "About"
                  ? { borderBottom: "solid 3px white", marginBottom: "5px" }
                  : { border: "none" }
              }
              to="/about"
            >
              <span className={headerStyles.navLink}> About</span>
            </Link>
          </li>
          <li>
            <Link
              style={
                props.header === "Blog"
                  ? { borderBottom: "solid 3px white", marginBottom: "5px" }
                  : { border: "none" }
              }
              to="/blog"
            >
              <span className={headerStyles.navLink}> Blog</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
