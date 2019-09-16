import React, { Component } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Books from "../Books"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import bookViewStyles from "./bookView.module.scss"
import bookViewFilters from "../../utils/bookViewFilters"

class BookView extends Component {
  state = {
    allBooks: [this.props.books],
    books: [],
    category: "Top Ten",
    searchParameter: undefined,
    showing: "Top Ten",
  }

  handleInput = event => {
    let name = event.target.name
    let value = event.target.value

    if (name === "searchParameter") {
      this.setState({
        [name]: value,
      })
    } else {
      let books = bookViewFilters.getCategory(this.state.allBooks[0], value)
      this.setState({
        books,
        [name]: value,
        showing: value,
      })
    }

    console.log("event key", event.nativeEvent)

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
      let books = bookViewFilters.searchBooks(
        this.state.allBooks[0],
        this.state.searchParameter
      )
      this.setState({
        books,
        showing: data,
      })
    }
  }

  //   onKeyDown = event => {
  //     event.preventDefault()

  //   }

  componentDidMount() {
    let books = bookViewFilters.getCategory(
      this.state.allBooks[0],
      this.state.category
    )

    this.setState({
      books,
    })
  }

  render() {
    return (
      <div>
        <div className={bookViewStyles.header}>
          <div className={bookViewStyles.select}>
            <h3>Filter Books by Category</h3>
            <select onChange={this.handleInput} className="select-css">
              <option
                className={bookViewStyles.options}
                name="category"
                value="Top Ten"
              >
                Top Ten
              </option>
              <option
                className={bookViewStyles.options}
                name="category"
                value="Age 0-3"
              >
                Age 0-3
              </option>
              <option
                className={bookViewStyles.options}
                name="category"
                value="Age 3-5"
              >
                Age 3-5
              </option>
              <option
                className={bookViewStyles.options}
                name="category"
                value="9-12 YA"
              >
                9-12 YA
              </option>
              <option
                className={bookViewStyles.options}
                name="category"
                value="Storytales"
              >
                Storytales
              </option>
              <option
                className={bookViewStyles.options}
                name="category"
                value="Librarians"
              >
                Librarians
              </option>
              <option
                className={bookViewStyles.options}
                name="category"
                value="Storytime"
              >
                Storytime
              </option>
              <option
                className={bookViewStyles.options}
                name="category"
                value="Newbury"
              >
                Newbury
              </option>
            </select>
          </div>

          <div className={bookViewStyles.orCont}>
            <span>~ or ~</span>
          </div>

          <div className={bookViewStyles.searchContainer}>
            <h3>Search by Title, Author or Genre</h3>
            <input
              className={bookViewStyles.searchBar}
              type="text"
              id="search-bar"
              name="searchParameter"
              onKeyUp={this.handleInput}
              placeholder="Search.."
            ></input>
            <button
              className={bookViewStyles.searchBtn}
              onClick={this.handleSubmit}
            >
              <FontAwesomeIcon icon={faSearch} />{" "}
            </button>
          </div>
        </div>
        <div className={bookViewStyles.results}>
          <h2>
            Results for{" "}
            <span style={{ fontWeight: "bold" }}>{this.state.showing}</span>
          </h2>
        </div>
        <ul
          className={
            this.state.books.length > 0
              ? bookViewStyles.visibleBooks
              : bookViewStyles.noBooks
          }
        >
          {this.state.books.length > 0
            ? this.state.books.map(index => {
                return <Books book={index} />
              })
            : ""}
        </ul>
      </div>
    )
  }
}

export default BookView
