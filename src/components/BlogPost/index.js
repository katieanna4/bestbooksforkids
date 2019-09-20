import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCalendarAlt,
  faUser,
  faShareSquare,
} from "@fortawesome/free-solid-svg-icons"

import blogStyles from "./bp.module.scss"

const BlogPost = props => {
  return (
    <div className={blogStyles.card}>
      <div>
        <Link
          state={{ comingFrom: "blog" }}
          to={`blog/${props.post.node.slug}`}
        >
          <img
            className={blogStyles.mainImage}
            src={props.post.node.mainImage.file.url}
          ></img>
        </Link>

        <div className={blogStyles.header}>
          <h3>{props.post.node.title}</h3>
          <div className={blogStyles.subHeader}>
            {/* <p>{props.post.node.published}</p>
          <p>{props.post.node.author}</p> */}

            <p>
              {" "}
              <FontAwesomeIcon className={blogStyles.icon} icon={faUser} />{" "}
              Katie Lewis
            </p>
          </div>
        </div>
        <div className={blogStyles.body}>
          <p>{props.post.node.shortDescription}</p>
        </div>
      </div>
      <div className={blogStyles.footer}>
        <p>
          <FontAwesomeIcon className={blogStyles.icon} icon={faCalendarAlt} />
          {props.post.node.published}
        </p>
        <Link
          state={{ comingFrom: "blog" }}
          className={blogStyles.link}
          to={`blog/${props.post.node.slug}`}
        >
          <p>
            <FontAwesomeIcon className={blogStyles.icon} icon={faShareSquare} />{" "}
            Keep Reading
          </p>
        </Link>
      </div>
    </div>
  )
}

export default BlogPost
