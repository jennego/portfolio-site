import React from "react"
import "flexboxgrid/dist/flexboxgrid.min.css"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Home = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPortfolio(sort: { fields: projectDate, order: DESC }) {
        edges {
          node {
            techSkills
            otherSkills
            projectUrl
            slug
            name
            mainPhoto {
              gatsbyImageData(height: 200)
            }
            shortDescription
          }
        }
      }
    }
  `)
  return (
    <div
      style={{
        minHeight: "90vh",
      }}
      id="portfolio"
    >
      <h2 className="section-title">Portfolio</h2>
      <div className="portfolio-grid">
        <div className="row">
          {data.allContentfulPortfolio.edges.map(({ node }) => (
            <div
              className="col-lg-4 col-md-6 col-xs-12 portfolio-item"
              onClick={() => navigate(`/project/${node.slug}`)}
            >
              {node.mainPhoto.gatsbyImageData ? (
                <GatsbyImage
                  image={node.mainPhoto.gatsbyImageData}
                  className="project-image"
                />
              ) : (
                ""
              )}
              <div className="project-details">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "1rem",
                    cursor: "pointer",
                  }}
                >
                  <h3> {node.name} </h3>
                  <p> {node.shortDescription} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
