import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCalendarAlt,
  faUser,
  faReplyAll,
} from "@fortawesome/free-solid-svg-icons"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import blogStyles from "./blogTemp.module.scss"

export const postData = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      shortDescription
      published(fromNow: true)
      mainImage {
        file {
          url
        }
      }
      blogBody {
        json
      }
    }
    allContentfulBook(filter: { blogPost: { eq: $slug } }) {
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
`

// const options = {
//   renderNode: {
//     "embedded-asset-block": node => {
//       const alt = "blog image"
//       const url = node.data.target.fields.file["en-US"].url
//       return <img alt={alt} src={url} />
//     },
//   },
// }

class BlogPost extends Component {
  state = {
    post: this.props.data.contentfulBlogPost,
    books: this.props.data.allContentfulBook,
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div className={blogStyles.container}>
        <div className={blogStyles.post}>
          <div className={blogStyles.content}>
            <div className={blogStyles.backButton}>
              <Link to="/blog">
                {" "}
                <FontAwesomeIcon
                  className={blogStyles.icons}
                  icon={faReplyAll}
                />{" "}
              </Link>
            </div>
            <h1>{this.state.post.title}</h1>
            <img
              className={blogStyles.mainImage}
              src={this.state.post.mainImage.file.url}
            ></img>

            <p>{this.state.post.published}</p>
            <p>- Katie Lewis</p>
            <p>{this.state.post.shortDescription}</p>
            <div className={blogStyles.blogBody}>
              {documentToReactComponents(this.state.post.blogBody.json)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogPost
