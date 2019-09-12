import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import bookStyles from "./books.module.scss"

const Book = props => {
  return (
    <div className={bookStyles.book}>
      <div className={bookStyles.bookHeader}>
        <img src={props.book.node.bookImage.file.url}></img>
        <h3>{props.book.node.bookTitle}</h3>
      </div>
      <div className={bookStyles.bookBody}></div>
      <div className={bookStyles.footer}>
        <span>button</span>
        <span>button</span>
      </div>
    </div>
  )
}

export default Book
