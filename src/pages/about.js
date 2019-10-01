import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import katieImage from "../images/jackson-hayes-L4qZZPJ_lAo-unsplash.jpg"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons"

import styles from "./about.module.scss"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout header="About">
      <SEO title="About" />
      <div className={styles.header}>
        <h1>Meet The Team</h1>
      </div>

      <div className={styles.firstAuthor}>
        <div className={styles.bioPhoto}>
          <img src={katieImage}></img>
          <p>
            Jane Doe writes SEO articles for businesses that want to see their
            Google search rankings surge.(What she does.) Her articles have
            appeared in a number of e-zine sites, including EzineArticles.com,
            ArticlesBase.com, HubPages.com and TRCB.com. She contributes
            articles about SEO techniques regularly to Site-Reference
            Newletter.com. Her articles focus on balancing informative with SEO
            needs–but never at the expense of providing an entertaining read.
            Learn more about how Jane’s SEO articles could grow your business by
            visiting her blog at JaneDoeSEOArticlesBlog.com
          </p>
        </div>
        <div className={styles.bioGeneral}>
          <p>Katie Lewis</p>
          <div className={styles.socialMedia}>
            <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
            <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
            <FontAwesomeIcon className={styles.icon} icon={faPinterest} />
          </div>
        </div>
      </div>
      <div className={styles.secondAuthor}>
        <div className={styles.bioPhoto}>
          <img src={katieImage}></img>
          <p>
            Jane Doe writes SEO articles for businesses that want to see their
            Google search rankings surge.(What she does.) Her articles have
            appeared in a number of e-zine sites, including EzineArticles.com,
            ArticlesBase.com, HubPages.com and TRCB.com. She contributes
            articles about SEO techniques regularly to Site-Reference
            Newletter.com. Her articles focus on balancing informative with SEO
            needs–but never at the expense of providing an entertaining read.
            Learn more about how Jane’s SEO articles could grow your business by
            visiting her blog at JaneDoeSEOArticlesBlog.com
          </p>
        </div>
        <div className={styles.bioGeneral}>
          <p>Anna Lewis</p>
          <div className={styles.socialMedia}>
            <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
            <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
            <FontAwesomeIcon className={styles.icon} icon={faPinterest} />
          </div>
        </div>
      </div>
      <div className={styles.thirdAuthor}>
        <div className={styles.bioPhoto}>
          <img src={katieImage}></img>
          <p>
            Jane Doe writes SEO articles for businesses that want to see their
            Google search rankings surge.(What she does.) Her articles have
            appeared in a number of e-zine sites, including EzineArticles.com,
            ArticlesBase.com, HubPages.com and TRCB.com. She contributes
            articles about SEO techniques regularly to Site-Reference
            Newletter.com. Her articles focus on balancing informative with SEO
            needs–but never at the expense of providing an entertaining read.
            Learn more about how Jane’s SEO articles could grow your business by
            visiting her blog at JaneDoeSEOArticlesBlog.com
          </p>
        </div>
        <div className={styles.bioGeneral}>
          <p>Karen Davis</p>
          <div className={styles.socialMedia}>
            <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
            <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
            <FontAwesomeIcon className={styles.icon} icon={faPinterest} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
