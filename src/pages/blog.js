import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const BlogPage = () => {
  return (
    <Layout header="Blog">
      <SEO title="Blog" />
      <h2>Blog Page</h2>
      <p>More info will go here</p>
    </Layout>
  )
}

export default BlogPage
