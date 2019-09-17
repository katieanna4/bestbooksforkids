import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import bookStyles from "./books.module.scss"

const Book = props => {
  return (
    <div className={bookStyles.book}>
      <div className={bookStyles.bookHeader}>
        <div className={bookStyles.imageContainer}>
          <img src={props.book.node.bookImage.file.url}></img>
          <div className={bookStyles.imageMiddle}>
            <div className={bookStyles.blog}>
              <button>Blog</button>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button>Amazon</button>
              <button>Best Books</button>
            </div>
          </div>
        </div>

        <h3>{props.book.node.bookTitle}</h3>
        <p>
          ~<span className={bookStyles.author}>{props.book.node.author}</span>~
        </p>
      </div>
      <div className={bookStyles.bookBody}></div>
      <div className={bookStyles.footer}></div>
    </div>
  )
}

export default Book
