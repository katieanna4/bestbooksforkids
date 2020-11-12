import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import katieImage from "../images/katie-family.jpg"
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
              <a
                className={styles.instagram}
                href="https://www.instagram.com/bestbookskids"
                target="_blank"
              >
                <FontAwesomeIcon className={styles.icons} icon={faInstagram} />
              </a>
              <FontAwesomeIcon
                onClick={scrollToContact}
                className={styles.icons}
                icon={faEnvelope}
              />
            </div>
            <p>
              Hi. My name is Katie. So I’m one of those kiddos who grew up with
              a stash of books at her fingertips. We didn’t have board books in
              the 70’s but I remember holding those few hardbound picture books
              like they were gold. And they were! We didn’t have money for
              vacations, but we had a set of encyclopedias. Texas heat kept me
              inside sometimes but I had the Mother West Wind books. Reading was
              just part of my daily routine.
            </p>
            <p>
              Looking back, my love for reading stemmed from 2 things - having
              books available at home, and having a parent read to me
              occasionally. So, when I had my daughter Anna, I bought some of
              Sandra Boynton’s board books and we laughed through those books
              every night. Anna got obsessed with the classic, The Little Engine
              That Could, and seriously, we memorized that book. But it wasn’t
              annoying, I loved it too.
            </p>
            <p>
              Later in life, I started working as a children’s librarian
              assistant at the local public library and got to help parents and
              kids find books as part of my job. I very quickly realized that
              LOTS of parents were stressed about their kids who didn’t like to
              read. Totally get it. Not all kids enjoy reading, it’s just not
              their deal. Ask me to play a sport with a ball, and I’ll look at
              you like you’re crazy - not my deal.
            </p>
            <p>
              But while working at the library, I discovered that a child is far
              more excited about reading a book IF it is about a topic they’re
              interested in. For example, if a boy loves trains, try Anna’s
              fave, The Little Engine That Could. Or if a girl loves to dance,
              find the Angelina Ballerina books. You get the idea. You can find
              a beautiful funny captivating picture book on almost any topic.
            </p>
            <p>
              I also learned that parents who are inevitably tired at night do
              NOT want to read a boring picture book, no matter how much they
              love that kiddo. Picture books should be just as entertaining for
              the reader as it is for the person being read to. And if parents
              don’t love the picture book, the kids won’t love it either.
            </p>
            <p>
              And that’s when I got the idea to start this blog. There are so
              many books at the library, it’s hard to find one your
              child-who-hates-to-read will actually like. Rarely are the books
              organized by topic, only alphabetically. If you browse books on
              Amazon, it’s a little easier to go by topic, but I never want to
              spend money on a book unless I know I love love love it, or my
              kids love love love it. So, Best Books for Kids is my way of
              making this process easier for you. My hope and dream is to help
              you find a book that you won’t mind reading over and over and
              over, a book that YOU will love! When your kids see you love a
              picture book, believe me, it’s contagious.
            </p>
            <p>
              I only post books that I have personally read and loved, and books
              that I believe are worth the asking price. Every book I post has
              amazing illustrations (makes a huge difference with a child who
              doesn’t like the words), is very often funny (anything that will
              make you and your child laugh is an absolute bonus!) and is one
              that won’t drive you nuts reading it. You won’t have to
              paraphrase, it isn’t too wordy, and you will LIKE the story.
            </p>
            <p>
              If you haven’t found a picture book that YOU love to read, start
              there. Browse the picture books, check out my top-10 for parents.
              Have fun reading a great story out loud! To me, the trick is to
              find picture books you love to read to your kids and keep that
              going. One super-entertaining beautiful picture book can be done
              even when you’re tired. Then find a book that is a topic your kids
              are interested in, add that to the pile, and see what happens...
            </p>
            <p>
              Happy reading! Please feel free to email me with questions or
              suggestions.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
