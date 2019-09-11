import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout header="About">
      <SEO title="About" />
      <h2>About Page</h2>
      <p>More info will go here</p>
    </Layout>
  )
}

export default AboutPage
