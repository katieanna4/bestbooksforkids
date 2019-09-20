import React, { Component } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { loadReCaptcha } from "react-recaptcha-google"
import contactStyles from "./contact.module.scss"
import ReCaptcha from "../ReCaptcha"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"

class Contact extends Component {
  state = {
    name: null,
    email: null,
    message: null,
    nameValid: true,
    emailValid: true,
  }

  handleInput = event => {
    let name = event.target.name
    let value = event.target.value

    this.setState({
      [name]: value,
    })
  }

  validateEmail = email => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  handleSubmit = event => {
    event.preventDefault()

    if (!this.state.name) {
      this.setState({
        nameValid: false,
      })
    } else {
      this.setState({
        nameValid: true,
      })
    }
    if (!this.validateEmail(this.state.email)) {
      this.setState({
        emailValid: false,
      })
    } else {
      this.setState({
        emailValid: true,
      })
    }
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
            {/* <p>I would love to hear from you!</p> */}
          </div>
          <div className={contactStyles.body}>
            <form>
              <div className={contactStyles.inputWrapper}>
                <input
                  onChange={this.handleInput}
                  type="name"
                  name="name"
                  placeholder="Enter your name"
                ></input>
                {this.state.nameValid ? (
                  ""
                ) : (
                  <FontAwesomeIcon
                    className={contactStyles.validation}
                    icon={faExclamationCircle}
                  />
                )}
              </div>
              <div className={contactStyles.inputWrapper}>
                <input
                  onChange={this.handleInput}
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                ></input>
                {this.state.emailValid ? (
                  ""
                ) : (
                  <FontAwesomeIcon
                    className={contactStyles.validation}
                    icon={faExclamationCircle}
                  />
                )}
              </div>
              <textarea
                onChange={this.handleInput}
                name="message"
                rows="10"
                cols="30"
                placeholder="Your message here..."
              ></textarea>
            </form>
          </div>
          <div className={contactStyles.footer}>
            <ReCaptcha />
            <button onClick={this.handleSubmit}>Submit Message</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
