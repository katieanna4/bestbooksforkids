import React, { Component } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { loadReCaptcha } from "react-recaptcha-google"
import contactStyles from "./contact.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class Contact extends Component {
  state = {
    name: null,
    email: null,
    message: null,
    nameValid: true,
    emailValid: true,
    displayMessage: false,
    messageText: "",
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

  sendMessage = message => {
    document.getElementById("nameField").value = ""
    document.getElementById("emailField").value = ""
    document.getElementById("messageField").value = ""

    this.setState(
      {
        displayMessage: true,
        messageText: message,
      },
      () => {
        setTimeout(() => {
          this.setState({
            displayMessage: false,
            messageText: "",
          })
        }, 1500)
      }
    )
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
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state }),
      })
        .then(() => this.sendMessage("Message sent successfully!"))
        .catch(error => alert(error))
    }
  }

  componentDidMount() {
    loadReCaptcha()
  }

  render() {
    return (
      <div className={contactStyles.container}>
        <div id="contact-submit" className={contactStyles.card}>
          <div className={contactStyles.header}>
            <h1>Contact</h1>
            {/* <p>I would love to hear from you!</p> */}
          </div>
          <div className={contactStyles.body}>
            <form
              name="contact"
              data-netlify-honeypot="bot-field"
              data-netlify="true"
              netlify
            >
              <div className={contactStyles.inputWrapper}>
                <input
                  onChange={this.handleInput}
                  type="name"
                  id="nameField"
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
                  id="emailField"
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
                id="messageField"
                rows="10"
                cols="30"
                placeholder="Your message here..."
              ></textarea>
            </form>
          </div>
          <div className={contactStyles.footer}>
            <button onClick={this.handleSubmit}>Submit Message</button>
            <div>
              {this.state.displayMessage ? (
                <h3 className={contactStyles.displayMessage}>
                  {this.state.messageText}
                </h3>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
