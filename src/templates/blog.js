import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import RecommendedBooks from "../components/RecommendedBooks"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngleLeft,
  faAngleRight,
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
    visibleBooks: [],
    mobileBooks: [],
    currentIndex: 0,
    pastIndex: 0,
  }

  componentDidMount() {
    console.log(this.props)
    // if (this.state.books.edges.length > 3) {
    //   let books = this.state.books.edges.slice(0, 3)
    //   this.setState({
    //     visibleBooks: books,
    //   })
    // } else {
    //   let books = this.state.books.edges
    //   this.setState({
    //     visibleBooks: books,
    //   })
    // }
    this.getBooks()
    this.getMoblie()
  }

  getBooks = () => {
    if (this.state.books.edges.length > 3) {
      let arr = []
      for (
        let i = this.state.currentIndex;
        i < [this.state.currentIndex + 3];
        i++
      ) {
        if (i < 0) {
          let num = this.state.books.edges.length - 1
          arr.push(this.state.books.edges[num])
        } else if (i > this.state.books.edges.length - 1) {
          arr.push(this.state.books.edges[i - this.state.books.edges.length])
        } else {
          arr.push(this.state.books.edges[i])
        }
      }

      this.setState({
        visibleBooks: arr,
      })
    } else if (this.state.books.edges.length > 0) {
      let books = this.state.books.edges
      this.setState({
        visibleBooks: books,
      })
    } else {
      this.setState({
        visibleBooks: false,
      })
    }
  }

  getMoblie = () => {
    if (this.state.books.edges.length > 2) {
      let arr = []
      for (
        let i = this.state.currentIndex;
        i < [this.state.currentIndex + 2];
        i++
      ) {
        if (i < 0) {
          let num = this.state.books.edges.length - 1
          arr.push(this.state.books.edges[num])
        } else if (i > this.state.books.edges.length - 1) {
          arr.push(this.state.books.edges[i - this.state.books.edges.length])
        } else {
          arr.push(this.state.books.edges[i])
        }
      }

      this.setState({
        mobileBooks: arr,
      })
    } else if (this.state.books.edges.length > 0) {
      let books = this.state.books.edges
      this.setState({
        mobileBooks: books,
      })
    } else {
      this.setState({
        mobileBooks: false,
      })
    }
  }

  next = () => {
    let sub

    let max = this.state.visibleBooks.length

    if (this.state.currentIndex < 0) {
      sub = this.state.visibleBooks.length - 1
    } else {
      sub = this.state.currentIndex + 1
    }

    if (sub > max) {
      sub = 0
    }

    this.setState(
      {
        currentIndex: sub,
      },
      () => {
        this.getBooks()
      }
    )
  }

  mobileNext = () => {
    let sub

    let max = this.state.mobileBooks.length + 1

    if (this.state.currentIndex < 0) {
      sub = this.state.mobileBooks.length - 1
    } else {
      sub = this.state.currentIndex + 1
    }

    if (sub > max) {
      sub = 0
    }

    this.setState(
      {
        currentIndex: sub,
      },
      () => {
        this.getMoblie()
      }
    )
  }

  prev = () => {
    let add
    let max = this.state.visibleBooks.length
    if (this.state.currentIndex < 0) {
      add = this.state.visibleBooks.length - 1
    } else {
      add = this.state.currentIndex - 1
    }

    if (add > max) {
      add = 0
    }

    this.setState(
      {
        currentIndex: add,
      },
      () => {
        this.getBooks()
      }
    )
  }

  mobilePrev = () => {
    let add
    let max = this.state.mobileBooks.length
    if (this.state.currentIndex < 0) {
      add = this.state.mobileBooks.length
    } else {
      add = this.state.currentIndex - 1
    }

    if (add > max) {
      add = 0
    }

    this.setState(
      {
        currentIndex: add,
      },
      () => {
        this.getMoblie()
      }
    )
  }

  render() {
    return (
      <div className={blogStyles.container}>
        <div className={blogStyles.post}>
          <div className={blogStyles.content}>
            <div className={blogStyles.backButton}>
              {this.props.location.state ? (
                <>
                  {this.props.location.state.comingFrom === "blog" ? (
                    <Link to="/blog">
                      {" "}
                      <FontAwesomeIcon
                        className={blogStyles.icons}
                        icon={faReplyAll}
                      />{" "}
                    </Link>
                  ) : (
                    <Link to="/">
                      {" "}
                      <FontAwesomeIcon
                        className={blogStyles.icons}
                        icon={faReplyAll}
                      />{" "}
                    </Link>
                  )}{" "}
                </>
              ) : (
                <>
                  <Link to="/">
                    {" "}
                    <FontAwesomeIcon
                      className={blogStyles.icons}
                      icon={faReplyAll}
                    />{" "}
                  </Link>
                </>
              )}
            </div>
            <h1>{this.state.post.title}</h1>
            <Link className={blogStyles.links} to="/about">
              {" "}
              <p className={blogStyles.author}>
                <FontAwesomeIcon className={blogStyles.icons} icon={faUser} />{" "}
                Katie Lewis
              </p>
            </Link>
            <img
              className={blogStyles.mainImage}
              src={this.state.post.mainImage.file.url}
            ></img>

            <div className={blogStyles.blogBody}>
              {documentToReactComponents(this.state.post.blogBody.json)}
            </div>
            <p className={blogStyles.published}>{this.state.post.published}</p>
            <div className={blogStyles.relatedHeader}>
              <h3>
                Here are some of the books I recommend for Young Adult Romance
              </h3>
            </div>
            <div className={blogStyles.relatedBooks}>
              {this.state.books.edges.length > 3 ? (
                <FontAwesomeIcon
                  onClick={this.prev}
                  className={blogStyles.arrow}
                  icon={faAngleLeft}
                />
              ) : (
                ""
              )}
              <ul>
                {this.state.visibleBooks.map(index => {
                  return <RecommendedBooks book={index} />
                })}
              </ul>
              {this.state.books.edges.length > 3 ? (
                <FontAwesomeIcon
                  onClick={this.next}
                  className={blogStyles.arrow}
                  icon={faAngleRight}
                />
              ) : (
                ""
              )}
            </div>
            <div className={blogStyles.mobileRelatedBooks}>
              {this.state.books.edges.length > 2 ? (
                <FontAwesomeIcon
                  onClick={this.mobilePrev}
                  className={blogStyles.mobileArrowLeft}
                  icon={faAngleLeft}
                />
              ) : (
                ""
              )}
              <ul>
                {this.state.mobileBooks.map(index => {
                  return <RecommendedBooks book={index} />
                })}
              </ul>
              {this.state.books.edges.length > 2 ? (
                <FontAwesomeIcon
                  onClick={this.mobileNext}
                  className={blogStyles.mobileArrowRight}
                  icon={faAngleRight}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogPost
