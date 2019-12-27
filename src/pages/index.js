import React from "react"
import { Layout } from "../components/Layout"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Home" />
    
    <h2>Vegan is beautiful</h2>
    <h3>Why all birds are gone ?</h3>

    <div className="row">
      <div className="col-sm">
        <p>Why the birds are all gone ?</p>
      </div>
      <div className="col-sm">
        <p>What's the reason ?</p>
      </div>
      <div className="col-sm">
        <p>Do cats ate all of them ?</p>
      </div>
    </div>

    <div className="row">
      <div className="col-lg lg-auto">
        <p>Please confirm that you're engaged :</p>
        <p>
          <button type="button" className="btn btn-success">
            Hello{" "}
          </button>
        </p>
      </div>
    </div>
  </Layout>
)
