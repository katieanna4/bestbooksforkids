import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer id="footer" className={footerStyles.footer}>
      <div>
        © {new Date().getFullYear()}, Best Books for Kids
        {` `}
        <a style={{ textDecoration: "none" }} href="" target="_blank">
          <FontAwesomeIcon className={footerStyles.icons} icon={faInstagram} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
