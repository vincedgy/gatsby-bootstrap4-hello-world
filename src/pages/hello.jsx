import React, { Component } from "react"
import { Layout } from "../components/Layout"
import SEO from "../components/seo"

export default class hello extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Hello" />
        <h1>Greetings !</h1>
        <p>Hi folks</p>
      </Layout>
    )
  }
}
