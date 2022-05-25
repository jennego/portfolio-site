import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Section } from "react-scroll-section"

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
    <Section id="about">
      <div
        style={{
          height: "90vh",
        }}
      >
        <h2>About</h2>
        <div className="text-section">
          {renderRichText(data.contentfulSiteInfo.aboutRt)}
        </div>
      </div>
    </Section>
  )
}

export default About
