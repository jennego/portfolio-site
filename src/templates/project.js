import React from "react"
import { graphql, Link } from "gatsby"
import "flexboxgrid/dist/flexboxgrid.min.css"
import { GatsbyImage } from "gatsby-plugin-image"

export const query = graphql`
  query projectQuery($id: String!) {
    contentfulPortfolio(id: { eq: $id }) {
      id
      name
      mainPhoto {
        gatsbyImageData
        title
      }
      longDescriptionRt {
        raw
      }
      projectUrl
      githubUrl
      projectDate
      otherSkills
      shortDescription
      techSkills
      type
      gallery {
        gatsbyImageData
      }
    }
  }
`

const Project = ({ data, pageContext }) => {
  let portfolio = data.contentfulPortfolio
  return (
    <div>
      <h1>{portfolio.name}</h1>
      <div className="row">
        <div className="col-md-9">
          <GatsbyImage image={portfolio.mainPhoto.gatsbyImageData} />
        </div>
        <div className="col-md-3 project-info">
          <p>{portfolio.shortDescription}</p>

          <p>
            Project Date:{" "}
            {portfolio.projectDate ? portfolio.projectDate : "Ongoing"}
          </p>

          {portfolio.githubUrl && (
            <p>
              Github:{" "}
              <a href={portfolio.githubUrl} target="_open" rel="noreferrer">
                See Github Repo
              </a>{" "}
            </p>
          )}

          {portfolio.projectUrl && (
            <p>
              Project:{" "}
              <a href={portfolio.projectUrl} target="_open" rel="noreferrer">
                See Live Project
              </a>{" "}
            </p>
          )}

          {portfolio.techSkills && (
            <div className="skill-list">
              Tech
              <ul>
                {portfolio.techSkills.map(skill => (
                  <li>{skill}</li>
                ))}
              </ul>
            </div>
          )}
          {portfolio.otherSkills && (
            <div className="skill-list">
              Other skills
              <ul>
                {portfolio.otherSkills.map(skill => (
                  <li>{skill}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div>
        <Link to="/"> Go Back Home </Link>
      </div>
    </div>
  )
}

export default Project
