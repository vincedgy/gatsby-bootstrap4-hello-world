import React from "react"
import { Layout } from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile {
        edges {
          node {
            childImageSharp {
              fluid {
                base64
                tracedSVG
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                originalImg
                originalName
              }
            }
          }
        }
      }
    }
  `)

  if (allFile.edges) {
    return (
      <Layout>
        <h1>{allFile.edges.length} vegan images that I like </h1>

        <ul>
        {
          allFile.edges.map(({node},key) => 
            <li key={key}>
              {node.childImageSharp.fluid.originalName}
              <Img fluid={node.childImageSharp.fluid} />
            </li>
          )            
        }
        </ul>

      </Layout>
    )
  } else {
    return <h4>Loading...</h4>
  }
}
