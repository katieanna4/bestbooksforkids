import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import FeaturedBook from "./FeaturedBook"
import Footer from "./Footer"

import layoutStyle from "./layout.module.scss"

const Layout = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className={layoutStyle.body}>
        <div className={layoutStyle.container}>
          <Header header={props.header} />
          <FeaturedBook />
          <main>{props.children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
