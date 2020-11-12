import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = props => {
  return (
    <>
      <div className={headerStyles.jumbotron}>
        <div className={headerStyles.pageInfo}>
          <span>Best</span>
          <h4> BOOKS FOR KIDS</h4>
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
              <span className={headerStyles.navLink}>HOME</span>
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
              <span className={headerStyles.navLink}> ABOUT</span>
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
              <span className={headerStyles.navLink}> BLOG</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
