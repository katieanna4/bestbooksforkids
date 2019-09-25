import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import BlogPost from "../BlogPost"
import postViewFilters from "../../utils/postViewFilters"

import styles from "./blogHeader.module.scss"

class BlogHeader extends Component {
  state = {
    allPosts: [this.props.blogPosts],
    posts: [],
    category: "Most Recent",
    subCategory: "All",
    searchParameter: undefined,
    showSub: null,
    showing: "Most Recent",
  }

  handleInput = event => {
    console.log(event.target)
    let name = event.target.name
    let value = event.target.value

    if (name === "searchParameter") {
      this.setState({
        [name]: value,
      })
    } else {
      console.log("()()()()()()()(")
      console.log(name)
      console.log(value)
      if (value === "Most Recent") {
        let posts = this.props.blogPosts

        this.setState({
          posts,
          [name]: value,
          showing: value,
          showSub: null,
          subCategory: "All",
        })
      } else {
        let val = this.state.subCategory
        let posts = postViewFilters.getCategory(this.state.allPosts[0], value)
        this.setState({
          posts,
          [name]: value,
          showing: value,
          showSub: val,
        })
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
                <option
                  className={styles.options}
                  name="category"
                  value="Most Recent"
                >
                  Most Recent
                </option>
                <option
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
                </option>
              </select>

              {this.state.showing === "Most Recent" ? (
                ""
              ) : (
                <div className={styles.subCategory}>
                  <select
                    onChange={this.handleSubInput}
                    className="select-css"
                    name="subCategory"
                  >
                    <option
                      className={styles.options}
                      name="subCategory"
                      value="All"
                    >
                      All
                    </option>
                    <option
                      className={styles.options}
                      name="subCategory"
                      value="Mystery"
                    >
                      Mystery
                    </option>
                    <option
                      className={styles.options}
                      name="subCategory"
                      value="Fiction"
                    >
                      Fiction
                    </option>
                    <option
                      className={styles.options}
                      name="subCategory"
                      value="Non-Fiction"
                    >
                      Non-Fiction
                    </option>
                    <option
                      className={styles.options}
                      name="subCategory"
                      value="Humor"
                    >
                      Humor
                    </option>
                    <option
                      className={styles.options}
                      name="subCategory"
                      value="History"
                    >
                      History
                    </option>
                    <option
                      className={styles.options}
                      name="subCategory"
                      value="Science Fiction"
                    >
                      Science Fiction
                    </option>
                    <option
                      className={styles.options}
                      name="subCategory"
                      value="Poetry"
                    >
                      Poetry
                    </option>
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
        </div>
        <ul
          className={
            this.state.posts.length > 0 ? styles.visiblePosts : styles.noPosts
          }
        >
          {this.state.posts.length > 0
            ? this.state.posts.map(index => {
                return <BlogPost post={index} />
              })
            : ""}
        </ul>
      </div>
    )
  }
}

export default BlogHeader
