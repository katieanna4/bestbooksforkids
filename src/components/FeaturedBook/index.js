import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faShareSquare } from "@fortawesome/free-solid-svg-icons"
import backgroundImage from "../../images/IMG_0496.jpg"
import featuredStyle from "./featured.module.scss"

const FeaturedBook = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulFeaturedBook {
        edges {
          node {
            blogTitle
            author
            slug
            shortDescription
            headingMessage
            published(fromNow: true)
            blogImage {
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
    <div className={featuredStyle.body}>
      <img src={backgroundImage}></img>
      <div className={featuredStyle.content}>
        <h1>{data.allContentfulFeaturedBook.edges[0].node.headingMessage}</h1>
        <div className={featuredStyle.headerWrapper}>
          <img
            src={
              data.allContentfulFeaturedBook.edges[0].node.blogImage.file.url
            }
          ></img>
          <div>
            <p className={featuredStyle.contentTitle}>
              {data.allContentfulFeaturedBook.edges[0].node.blogTitle}
            </p>
            <span>
              <FontAwesomeIcon className={featuredStyle.icons} icon={faUser} />{" "}
              {data.allContentfulFeaturedBook.edges[0].node.author}
            </span>

            <div className={featuredStyle.contentBody}>
              <p>
                {data.allContentfulFeaturedBook.edges[0].node.shortDescription}
              </p>
            </div>
            <div className={featuredStyle.contentFooter}>
              <Link
                to={`blog/${data.allContentfulFeaturedBook.edges[0].node.slug}`}
              >
                <FontAwesomeIcon
                  icon={faShareSquare}
                  className={featuredStyle.footerButton}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBook
