import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import homeStyles from "./home.module.scss"
import BookView from "../components/BookView"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBook(sort: { fields: [bookTitle], order: ASC }) {
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

      allContentfulCategories(
        sort: { fields: [category, subCategories___subCategories], order: ASC }
      ) {
        edges {
          node {
            category
            subCategories {
              subCategories
            }
            tags {
              tags
            }
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
          <h1>Find a book your child will love</h1>
          <p>Explore my Library</p>
        </div>
      </div>

      <BookView
        books={data.allContentfulBook.edges}
        categories={data.allContentfulCategories}
      />
    </Layout>
  )
}

export default IndexPage
