import React, { Component } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { loadReCaptcha } from "react-recaptcha-google"
import contactStyles from "./contact.module.scss"
import ReCaptcha from "../ReCaptcha"

class Contact extends Component {
  state = {
    name: null,
    email: null,
    message: null,
  }

  componentDidMount() {
    loadReCaptcha()
  }

  render() {
    return (
      <div className={contactStyles.container}>
        <div className={contactStyles.card}>
          <div className={contactStyles.header}>
            <h1>Contact</h1>
            <p>I would love to hear from you!</p>
          </div>
          <div className={contactStyles.body}>
            <form>
              <input
                type="name"
                name="name"
                placeholder="Enter your name"
              ></input>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
              ></input>
              <textarea
                name="message"
                rows="10"
                cols="30"
                placeholder="Your message here..."
              ></textarea>
            </form>
          </div>
          <div className={contactStyles.footer}>
            <ReCaptcha />
            <button>Submit Message</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
