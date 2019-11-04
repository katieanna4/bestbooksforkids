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
              Hi. So I’m one of those kiddos who grew up with a stash of books
              at her fingertips. My parents had children’s picture books
              available to me since I can remember. We didn’t have board books
              in the 70’s but I remember holding those hardbound picture books
              like they were gold. And they were! My mom was a junior high or
              high school Theater or English teacher for all of my junior high
              and high school years - so we were surrounded by a lot of
              literature. Good literature. I don’t think my mom bought a badly
              written book. Money was always scarce so I either went to a
              library for books or perused our shelves at home.
            </p>
            <p>
              One of the only memories I have of my Dad is him reading a picture
              book to me on my bed when I was probably 7 or 8 years old.
              Obviously I was past the reading level of picture books, but
              picture books are classic! They’re for any age, and definitely for
              any parent willing to read to their child - whether they’re a baby
              who isn’t talking yet, or an 8 year old who has the book memorized
              but was always willing to hear her dad’s voice read it out loud.
            </p>
            <p>
              When I was little, I remember reading/devouring Thorton Burgess’s
              Mother West Wind books - which are now pretty outdated - too many
              words, not enough action, but man I totally thought those animals
              were real. I also loved Beatrix Potter’s Peter Rabbit books -
              still read those. To this day, I cannot kill a mouse, because it
              might be cute little Hunca Munca! These beautifully written and
              illustrated books brought animals to life for me, and I am an
              absolute animal lover to this day. As I grew older I read the
              Little House on the Prairie series - loved Laura, loved her Ma and
              Pa. She went through some dang tough times in those books - I feel
              like I gained some personal resilience just from reading about
              Laura - a knowledge that when tough things came, I had what it
              took already inside of me. I also loved the Anne of Green Gables
              series - I loved Anne’s desperate desire to be loved, and her
              unashamed honesty through it all. She has no guile. I learned how
              to look at myself, and really self-evaluate things from Anne. Then
              in high school, I read lots of classics- Dickens, Austen, Tolkein,
              etc. BUT none of these books are for the child who doesn’t love to
              read. They are word-y, FULL of description, lots of character
              building, less dialogue - beautiful but it makes for slooooow
              reading unless you love to read already.
            </p>
            <p>
              So, I gave birth to my daughter Anna when I was 29 and was
              absolutely determined to instill in her a love for reading like I
              had when I was a child. We discovered the rhythmical and hilarious
              board books for Sandra Boynton, and I sang/read those books every
              day. She was obsessed with the classic book, The Little Engine
              That Could, and seriously, we memorized that book. I could read it
              without even looking at the words we read it so many times per
              night. Now she’s a teen and reads less than she used to, but she
              still loves to get lost in a good book. Reading to her when she
              was little helped her find that love, but from what I could tell,
              her love of reading was already there, already a part of her. It’s
              one of her gifts.
            </p>
            <p>
              When I was a mom of 3 girls, we had 2 girls who loved to read, but
              one who hated it. Such a struggle. I remember well that elementary
              school phase of reading 20 minutes every night. For 2 of them,
              that 20 minutes was not a big deal. For the other, massive stress.
              Later, I started working as a children’s librarian assistant as
              the local public library and got to help kiddos find books as part
              of my job. I very quickly realized that LOTS of moms were stressed
              about their kids who didn’t like to read, and would do almost
              anything to make that 20 minutes of assigned reading go away!
              Totally get it. So while working at my job, I quickly discovered
              that a child is far more excited about reading a book if it is
              about a topic they’re interested in. For example, if a boy loves
              Thomas the Train, try the Thomas the Train books! Or if a girl
              loves to dance, find the Angelina Ballerina books. You get the
              idea. You can find a beautiful funny captivating picture book on
              almost any topic.
            </p>
            <p>
              And that’s when I got this idea to start this blog. There are so
              many books at the library, it’s hard to go through each one and
              find one your child-who-hates-to-read will actually like. Rarely
              are the books organized by topic, only alphabetically. If you
              browse books on Amazon, it’s a little easier to go by topic, but
              how do you know what you’re getting? And I never want to spend my
              money on a book unless I’ve checked it out of the library first
              and I know I love love love it, or my kiddos love love love it.
              Soooo, Best Book for Kids is my way of making this process easier
              for you. My hope and dream is to help find a book about a topic
              that your child will want to read over and over and over. Reading
              isn’t everyone’s gift - ask me to play any sport with a ball and I
              will look at you like you’re crazy - it’s just not my deal. Even
              if your child is a math whiz, or just doesn’t like anything about
              school, if they can learn to read on their own without being
              prodded and pushed, school will be a lot easier for them in the
              long run. And a lot easier for you!
            </p>
            <p>
              Browse the topics, read the reviews. Every book I post has amazing
              illustrations (makes a huge difference with a child who doesn’t
              like the words), is very often funny (anything that will make you
              and your child laugh is an absolute bonus!) and is one that won’t
              drive you nuts reading it. You won’t have to paraphrase, it isn’t
              too wordy, and you will LIKE the story. These will be picture
              books - books that YOU read to your child. So, they may not count
              for their elementary school assigned 20 minutes, but it will
              certainly give them a taste of how wonderful reading can be.
            </p>
            <p>
              I’ve also included books for kiddos in Kindergarten through 2nd
              grade - kids who are learning to read. These aren’t organized by
              topic - just suggestions for where to start. If you find some
              picture books that they like to hear BEFORE they get to this phase
              of life, it will make reading on their own a LOT easier. If you
              haven’t found a book they like to hear yet, start there. Show them
              how much you like the story, place them on your lap, give them
              your undivided attention - no phones allowed. Even if they don’t
              want to read for very long, just one picture book per night that
              YOU enjoy reading out loud to them will set the stage for them to
              enjoy reading on their own later on. And again, it may not be
              their gift, they may not ever excel in reading, and that’s ok! To
              me, the trick is to find a book they enjoy hearing YOU read, then
              find a book that is a topic they’re interested in, and then see
              what happens. If it sticks, great. You can introduce them to some
              of the classics - more wordy but amazing books! If it doesn’t
              stick, my goal is that they will at least love it when YOU reading
              to them, and not fight you as much over that 20 minutes when they
              get older.
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
