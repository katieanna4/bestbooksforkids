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
            bookTitle
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
          }
        }
      }
    }
  `)

  return (
    <Layout header="Home">
      <SEO title="Home" />
      <div className={homeStyles.header}>
        <div>
          <h1>Find the perfect book for your child</h1>
          <p>Search through my recommended books</p>
        </div>
      </div>
      <BookView books={data.allContentfulBook.edges} />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    </Layout>
  )
}

export default IndexPage
