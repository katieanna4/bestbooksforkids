import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"

import styles from "./notFound.module.scss"

const NotFoundPage = () => (
  <Layout>
    <div className={styles.container}>
      <h1>404 page not found</h1>
      <p>I couldn't find the page you are looking for.</p>
      <Link style={{ textDecoration: "none", color: "black" }} to="/">
        <FontAwesomeIcon icon={faHome} className={styles.icon} />
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
