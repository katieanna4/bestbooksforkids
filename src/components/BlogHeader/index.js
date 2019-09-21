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
    showing: "Most Recent",
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

        this.setState({
          posts,
          [name]: value,
          showing: value,
        })
      } else {
        let posts = postViewFilters.getCategory(this.state.allPosts[0], value)
        this.setState({
          posts,
          [name]: value,
          showing: value,
        })
      }
    }

    if (event.nativeEvent.key === "Enter") {
      console.log("enter working")

      this.handleSubmit(event)
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    let data = this.state.searchParameter

    if (!data || data.trim() === "") {
      return false
    } else {
      document.getElementById("search-bar").value = ""
      let posts = postViewFilters.searchBooks(
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
        <div className={styles.header}>
          <div className={styles.select}>
            <h3>Filter Books by Category</h3>
            <select onChange={this.handleInput} className="select-css">
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
          </div>

          <div className={styles.orCont}>
            <span>~ or ~</span>
          </div>

          <div className={styles.searchContainer}>
            <h3>Search by Title, Author or Genre</h3>
            <input
              className={styles.searchBar}
              type="text"
              id="search-bar"
              name="searchParameter"
              onKeyUp={this.handleInput}
              placeholder="Search.."
            ></input>
            <button className={styles.searchBtn} onClick={this.handleSubmit}>
              <FontAwesomeIcon icon={faSearch} />{" "}
            </button>
          </div>
        </div>
        <div className={styles.results}>
          <h2>
            Results for{" "}
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
