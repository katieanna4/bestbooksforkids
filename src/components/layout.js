import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import FeaturedBook from "./FeaturedBook"
import Footer from "./Footer"
import Contact from "./Contact"

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
      {props.page === "home" ? (
        <>
          <div className={layoutStyle.body}>
            <div className={layoutStyle.container}>
              <Header header={props.header} />
              <FeaturedBook />
              <main>{props.children}</main>
              <Contact />
              <Footer />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={layoutStyle.body}>
            <div className={layoutStyle.container}>
              <Header header={props.header} />

              <main>{props.children}</main>
              <Contact />
              <Footer />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Layout
