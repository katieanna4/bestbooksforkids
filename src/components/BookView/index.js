import React, { Component } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Books from "../Books"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import bookViewStyles from "./bookView.module.scss"

class BookView extends Component {
  state = {
    books: [this.props.books],
    category: "Top Ten",
    searchParameter: undefined,
    showing: "Top Ten",
  }

  handleInput = event => {
    let name = event.target.name
    let value = event.target.value

    this.setState({
      [name]: value,
    })
  }

  componentDidMount() {}

  render() {
    console.log(this.props)
    console.log(this.state.books)
    return (
      <div>
        <div className={bookViewStyles.header}>
          <div className={bookViewStyles.select}>
            <h3>Filter Books by Category</h3>
            <select>
              <option className={bookViewStyles.options} value="0">
                Top Ten
              </option>
              <option className={bookViewStyles.options} value="1">
                Age 0-3
              </option>
              <option className={bookViewStyles.options} value="2">
                Age 3-5
              </option>
              <option className={bookViewStyles.options} value="3">
                9-12 YA
              </option>
              <option className={bookViewStyles.options} value="4">
                Storytales
              </option>
              <option className={bookViewStyles.options} value="5">
                Librarians
              </option>
              <option className={bookViewStyles.options} value="6">
                Storytime
              </option>
              <option className={bookViewStyles.options} value="7">
                Newbury
              </option>
            </select>
          </div>

          <div className={bookViewStyles.searchContainer}>
            <h3>Search by title or author</h3>
            <input
              className={bookViewStyles.searchBar}
              type="text"
              placeholder="Search.."
            ></input>
            <button className={bookViewStyles.searchBtn}>
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
        <ul className={bookViewStyles.visibleBooks}>
          {this.state.books[0].map(index => {
            return <Books book={index} />
          })}
        </ul>
      </div>
    )
  }
}

export default BookView
