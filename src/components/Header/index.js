import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
        </ul>
      </nav>
    </>
  )
}

export default Header
