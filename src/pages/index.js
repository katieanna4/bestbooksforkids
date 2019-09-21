import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import homeStyles from "./home.module.scss"
import BookView from "../components/BookView"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulFeaturedBook {
        edges {
          node {
            mainImage {
              file {
                url
              }
            }
            blogTitle
            slug
            shortDescription
            headingMessage
          }
        }
      }
      allContentfulBook {
        edges {
          node {
            bookTitle
            bookImage {
              file {
                url
              }
            }
            author
            category
            tags
            amazonLink
            goodReads
            blogPost
          }
        }
      }
    }
  `)

  return (
    <Layout page="home" header="Home">
      <SEO title="Home" />
      <div className={homeStyles.header}>
        <div>
          <h1>Find the perfect book for your child</h1>
          <p>Search through my recommended books</p>
        </div>
      </div>
      <BookView books={data.allContentfulBook.edges} />
    </Layout>
  )
}

export default IndexPage
