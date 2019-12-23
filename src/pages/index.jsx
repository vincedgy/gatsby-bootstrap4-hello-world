import React from "react"
import { Layout } from "../components/Layout"
import 'bootstrap/dist/css/bootstrap.min.css'
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Home"/>
    <h1>Vegan is beautiful</h1>
    <h2>Why all birds are gone ?</h2>
    
    <div className="container">
      <div className="row">
        <div className="col-3">Why the birds are all gone ?</div>
        <div className="col-3">Why should I care ?</div>
        <div className="col-3">What's the reason ?</div>
        <div className="col-3">Do cats ate all of them ?</div>
      </div>

      <div className="row">
        <button className="btn btn-primary">Hello </button>
      </div>
    
    </div>
  </Layout>
)
