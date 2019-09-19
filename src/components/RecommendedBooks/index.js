import React from "react"
import { Link } from "gatsby"

import styles from "./recommended.module.scss"

const RecommendedBooks = props => {
  return (
    <div className={styles.book}>
      <div className={styles.bookHeader}>
        <div className={styles.imageContainer}>
          <img src={props.book.node.bookImage.file.url}></img>
          <div className={styles.imageMiddle}>
            <div>
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
          ~<span className={styles.author}>{props.book.node.author}</span>~
        </p>
      </div>
      <div className={styles.bookBody}></div>
      <div className={styles.footer}></div>
    </div>
  )
}

export default RecommendedBooks
