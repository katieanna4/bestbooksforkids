import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import katieImage from "../images/jackson-hayes-L4qZZPJ_lAo-unsplash.jpg"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import styles from "./about.module.scss"
import SEO from "../components/seo"

const AboutPage = () => {
  const scrollToContact = () => {
    let el = document.getElementById("contact-submit")
    el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Layout header="About" page="about">
      <div className={styles.container}>
        <div>
          <div className={styles.imgContainer}>
            <img src={katieImage}></img>
          </div>
          <div className={styles.bio}>
            <h3>About Katie</h3>
            <div className={styles.contact}>
              <FontAwesomeIcon className={styles.icons} icon={faInstagram} />
              <FontAwesomeIcon
                onClick={scrollToContact}
                className={styles.icons}
                icon={faEnvelope}
              />
            </div>
            <p>
              Paul flashed the charm in full during his session, detailing
              expectations for the season, sharing how excited he was in a fresh
              start, while also playing up the nostalgia element.
            </p>
            <p>
              Inside the locker room, Westbrook's spot is now shared by training
              camp invitees and will likely be empty on opening night. Once upon
              a time, James Harden was at the locker to the right of
              Westbrook's, and Kevin Durant to the right of Harden's. Harden was
              traded, Durant left, and for the past few years, the lockers next
              to Westbrook's stayed empty.
            </p>
            <p>
              The Thunder have orbited in Westbrook's universe the past few
              years, and his gravity was felt in every room of every building he
              occupied. For some, it was exhausting to deal with on a day-in,
              day-out basis. Every decision, every policy, whether minor or
              major, flowed through Westbrook.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
