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
              {props.book.node.blogPost ? (
                <Link to={`blog/${props.book.node.blogPost}`}>
                  <button>Blog</button>
                </Link>
              ) : (
                ""
              )}
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <a href={props.book.node.amazonLink} target="_blank">
                <button>Amazon</button>
              </a>
              <a href={props.book.node.goodReads} target="_blank">
                {" "}
                <button>Good Reads</button>
              </a>
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
