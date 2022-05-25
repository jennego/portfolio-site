import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const About = props => {
  const data = useStaticQuery(graphql`
    {
      contentfulSiteInfo {
        aboutRt {
          raw
        }
      }
    }
  `)
  return (
    <div
      style={{
        height: "90vh",
      }}
      id="about"
    >
      <h2>About</h2>
      <div className="text-section">
        {renderRichText(data.contentfulSiteInfo.aboutRt)}
      </div>
    </div>
  )
}

export default About
