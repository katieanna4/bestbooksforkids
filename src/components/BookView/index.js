import React, { Component } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Books from "../Books"

import bookViewStyles from "./bookView.module.scss"

class BookView extends Component {
  state = {
    books: [this.props.books],
    category: "all",
    searchParameter: undefined,
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
        something will go here
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
