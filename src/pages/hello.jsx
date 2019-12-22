import React, { Component } from "react"
import { Layout } from "../components/Layout"

export default class hello extends Component {
  render() {
    return (
      <Layout>
        <h1>Greetings !</h1>
        <p>Hi folks</p>
      </Layout>
    )
  }
}
