import React, { Component } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Books from "../Books"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faArrowCircleDown } from "@fortawesome/free-solid-svg-icons"
import bookViewStyles from "./bookView.module.scss"
import bookViewFilters from "../../utils/bookViewFilters"

class BookView extends Component {
  state = {
    allBooks: [this.props.books],
    allCategories: [this.props.categories],
    books: [],
    category: "Current Top Ten",
    searchParameter: undefined,
    showing: "Current Top Ten",
    subCategory: null,
    subCat: "A-Z",
  }

  getSubCategory = () => {
    let arr = this.state.allCategories[0].edges.map(index => {
      return index.node.category
    })

    if (this.state.category === "Current Top Ten") {
      let subArr = ["A-Z", "Z-A"]
      this.setState({
        subCategory: subArr,
        subCat: subArr[0],
      })
    } else {
      let index = arr.indexOf(this.state.category)
      let subArr = this.state.allCategories[0].edges[
        index
      ].node.subCategories.subCategories.split(", ")
      let trimmedSubArr = []
      subArr.forEach(index => {
        console.log(index)
        trimmedSubArr.push(index.trim())
      })
      this.setState({
        subCategory: trimmedSubArr,
        subCat: trimmedSubArr[0],
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
      let books = bookViewFilters.getCategory(this.state.allBooks[0], value)
      this.setState(
        {
          books,
          [name]: value,
          showing: value,
          subCategory: null,
          subCat: null,
        },
        () => {
          this.getSubCategory()
        }
      )
    }

    if (event.nativeEvent.key === "Enter") {
      this.handleSubmit(event)
    }
  }

  scrollToContact = () => {
    let el = document.getElementById("contact-submit")
    el.scrollIntoView({ behavior: "smooth" })
  }

  handleSubInput = event => {
    let name = event.target.name
    let value = event.target.value

    let books = bookViewFilters.getCategory(
      this.state.allBooks[0],
      this.state.category
    )

    this.setState(
      {
        books,
      },
      () => {
        if (!this.state.subCat || value === "All") {
          let val = "All"

          let books = bookViewFilters.getCategory(
            this.state.allBooks[0],
            this.state.category
          )
          this.setState({
            books,
            [name]: value,
            subCat: val,
          })
        } else if (value === "Z-A" || value === "A-Z") {
          let arr = this.state.books
          arr.reverse()
          this.setState({
            books: arr,
          })
        } else {
          let books = bookViewFilters.searchBooks(this.state.books, value)

          this.setState({
            books,
            [name]: value,
            subCat: value,
          })
        }
      }
    )
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
        category: "N/A",
        subCat: null,
        subCategory: null,
      })
    }
  }

  componentDidMount() {
    this.getSubCategory()
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
            <div className={bookViewStyles.selectDropdown}>
              <select
                onChange={this.handleInput}
                name="category"
                className="select-css"
              >
                {this.state.category === "N/A" ? (
                  <option
                    selected
                    className={bookViewStyles.options}
                    name="category"
                    value="N/A"
                  >
                    N/A
                  </option>
                ) : (
                  ""
                )}
                <option
                  className={bookViewStyles.options}
                  name="category"
                  value="Current Top Ten"
                >
                  Current Top Ten
                </option>
                {this.state.allCategories[0].edges.map(index => {
                  return (
                    <option
                      className={bookViewStyles.options}
                      name="category"
                      value={index.node.category}
                    >
                      {index.node.category}
                    </option>
                  )
                })}
              </select>
              {this.state.subCategory ? (
                <div>
                  <select
                    onChange={this.handleSubInput}
                    className="select-css"
                    name="subCat"
                  >
                    {this.state.subCategory.map(index => {
                      if (index === "All" || index === "A-Z") {
                        return (
                          <option
                            value={index}
                            className={bookViewStyles.options}
                            selected
                          >
                            {index}
                          </option>
                        )
                      } else {
                        return (
                          <option
                            value={index}
                            className={bookViewStyles.options}
                          >
                            {index}
                          </option>
                        )
                      }
                    })}
                  </select>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className={bookViewStyles.orCont}>
            <span> or </span>
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
            {/* <button
              className={bookViewStyles.searchBtn}
              onClick={this.handleSubmit}
            >
              <FontAwesomeIcon icon={faSearch} />{" "}
            </button> */}
          </div>
        </div>
        <div className={bookViewStyles.results}>
          <h2>
            Results for{" "}
            <span style={{ fontWeight: "bold" }}>"{this.state.showing}"</span>
          </h2>
        </div>
        <ul
          className={
            this.state.books.length > 0
              ? bookViewStyles.visibleBooks
              : bookViewStyles.noBooks
          }
        >
          {this.state.books.length > 0 ? (
            this.state.books.map(index => {
              return <Books book={index} />
            })
          ) : (
            <div className={bookViewStyles.noResults}>
              <h3>Oops. There are no results for your search</h3>
              <p>
                Reach out to me below if there is a specific book, author, or
                genre you'd like to see in my library!
              </p>
              <FontAwesomeIcon
                icon={faArrowCircleDown}
                className={bookViewStyles.icons}
                onClick={this.scrollToContact}
              />
            </div>
          )}
        </ul>
      </div>
    )
  }
}

export default BookView
