import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </footer>
  )
}

export default Footer
