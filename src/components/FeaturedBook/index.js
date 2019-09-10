import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import featuredStyle from "./featured.module.scss"

const FeaturedBook = () => {
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
    }
  `)

  return (
    <div className={featuredStyle.body}>
      <img
        src={data.allContentfulFeaturedBook.edges[0].node.mainImage.file.url}
      ></img>
    </div>
  )
}

export default FeaturedBook
