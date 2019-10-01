import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import BlogPost from "../BlogPost"
import postViewFilters from "../../utils/postViewFilters"

import styles from "./blogHeader.module.scss"

class BlogHeader extends Component {
  state = {
    allPosts: [this.props.blogPosts],
    allCategories: [this.props.categories],
    posts: [],
    category: "Most Recent",
    subCategory: null,
    searchParameter: undefined,
    showSub: null,
    showing: "Most Recent",
    searchMade: false,
  }

  getSubCategory = () => {
    let arr = this.state.allCategories[0].edges.map(index => {
      return index.node.category
    })

    console.log("{}{}{}{}{}{}")
    console.log(this.state.category)
    console.log("==========")
    if (this.state.category === "Most Recent") {
      return false
    } else {
      let index = arr.indexOf(this.state.category)
      let subArr = this.state.allCategories[0].edges[
        index
      ].node.subCategories.subCategories.split(", ")

      console.log(subArr)
      this.setState({
        subCategory: subArr,
        showSub: subArr[0],
      })
    }
  }

  handleInput = event => {
    let name = event.target.name
    let value = event.target.value

    if (name === "searchParameter") {
      this.setState({
        [name]: value,
      })
    } else {
      if (value === "Most Recent") {
        let posts = this.props.blogPosts

        this.setState(
          {
            posts,
            [name]: value,
            showing: value,
            showSub: null,
            subCategory: null,
            searchMade: false,
          },
          () => {
            this.getSubCategory()
          }
        )
      } else {
        let val = this.state.subCategory
        let posts = postViewFilters.getCategory(this.state.allPosts[0], value)
        console.log("MADE IT BACK TO INDEX")
        console.log(name, value)
        this.setState(
          {
            posts,
            [name]: value,
            showing: value,
            showSub: val,
            searchMade: false,
          },
          () => {
            this.getSubCategory()
          }
        )
      }
    }

    if (event.nativeEvent.key === "Enter") {
      console.log("enter working")

      this.handleSubmit(event)
    }
  }

  handleSubInput = event => {
    let name = event.target.name
    let value = event.target.value
    console.log("{}{}{}{}{}{}{}{}{}")
    console.log(name, value)
    if (!this.state.showSub || value === "All") {
      let val = "All"
      let posts = postViewFilters.getCategory(
        this.state.allPosts[0],
        this.state.category
      )
      this.setState({
        posts,
        [name]: value,
        showSub: val,
      })
    } else {
      let posts = postViewFilters.getCategory(this.state.posts, value)
      this.setState({
        posts,
        [name]: value,
        showSub: value,
      })
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    let data = this.state.searchParameter

    if (!data || data.trim() === "") {
      return false
    } else {
      document.getElementById("search-bar").value = ""
      let posts = postViewFilters.searchPosts(
        this.state.allPosts[0],
        this.state.searchParameter
      )
      this.setState({
        posts,
        showing: data,
        subCategory: null,
        showSub: null,
        searchMade: true,
      })
    }
  }

  componentDidMount() {
    let posts = this.props.blogPosts

    this.setState({
      posts,
    })
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.blogHeader}>
          <div>
            <h1>My Blog</h1>
            <p>
              This is going to a be a description about the blog. It probably
              should be 2-3 sentences long and entice the reader to click on a
              blog post below. This is the third sentence.
            </p>
          </div>
        </div>

        <div className={styles.header}>
          <div className={styles.select}>
            <h3>Filter Posts by Category</h3>
            <div className={styles.selectContainer}>
              <select
                onChange={this.handleInput}
                className="select-css"
                name="category"
              >
                {this.state.searchMade ? (
                  <option
                    className={styles.options}
                    name="category"
                    value="N/A"
                    selected
                  >
                    N/A
                  </option>
                ) : (
                  ""
                )}

                <option
                  className={styles.options}
                  name="category"
                  value="Most Recent"
                >
                  Most Recent
                </option>
                {this.state.allCategories[0].edges.map(index => {
                  return (
                    <option
                      className={styles.options}
                      name="category"
                      value={index.node.category}
                    >
                      {index.node.category}
                    </option>
                  )
                })}

                {/* <option
                  className={styles.options}
                  name="category"
                  value="Age 0-3"
                >
                  Age 0-3
                </option>
                <option
                  className={styles.options}
                  name="category"
                  value="Age 3-5"
                >
                  Age 3-5
                </option>
                <option
                  className={styles.options}
                  name="category"
                  value="9-12 YA"
                >
                  9-12 YA
                </option>
                <option
                  className={styles.options}
                  name="category"
                  value="Storytales"
                >
                  Storytales
                </option>
                <option
                  className={styles.options}
                  name="category"
                  value="Librarians"
                >
                  Librarians
                </option>
                <option
                  className={styles.options}
                  name="category"
                  value="Storytime"
                >
                  Storytime
                </option>
                <option
                  className={styles.options}
                  name="category"
                  value="Newbury"
                >
                  Newbury
                </option> */}
              </select>

              {!this.state.subCategory ? (
                ""
              ) : (
                <div className={styles.subCategory}>
                  <select
                    onChange={this.handleSubInput}
                    className="select-css"
                    name="showSub"
                  >
                    {this.state.subCategory.map(index => {
                      if (index === "All") {
                        return (
                          <option
                            value={index}
                            className={styles.options}
                            selected
                          >
                            {index}
                          </option>
                        )
                      } else {
                        return (
                          <option value={index} className={styles.options}>
                            {index}
                          </option>
                        )
                      }
                    })}
                  </select>
                </div>
              )}
            </div>
          </div>
          <div className={styles.orCont}>
            <span>~ or ~</span>
          </div>

          <div className={styles.searchContainer}>
            <h3>Search through all my blog posts</h3>
            <input
              className={styles.searchBar}
              type="text"
              id="search-bar"
              name="searchParameter"
              onKeyUp={this.handleInput}
              placeholder="Search.."
            ></input>
          </div>
        </div>
        <div className={styles.results}>
          <h2>
            {this.state.showSub ? (
              <span>{this.state.showSub} results for </span>
            ) : (
              "Results for "
            )}

            <span style={{ fontWeight: "bold" }}>{this.state.showing}</span>
          </h2>
          {this.state.posts.length > 0 ? (
            <p>{this.state.posts.length} posts found</p>
          ) : (
            ""
          )}
        </div>
        <ul
          className={
            this.state.posts.length > 0 ? styles.visiblePosts : styles.noPosts
          }
        >
          {this.state.posts.length > 0 ? (
            this.state.posts.map(index => {
              return <BlogPost post={index} />
            })
          ) : (
            <div className={styles.noResults}>
              <h3>Oops. There are no results for your search</h3>
              <p>
                Please reach out to me if you there is a specifc genre, topic or
                category you want to see me write about!
              </p>
              <FontAwesomeIcon icon={faEnvelope} className={styles.mailIcon} />
            </div>
          )}
        </ul>
      </div>
    )
  }
}

export default BlogHeader
