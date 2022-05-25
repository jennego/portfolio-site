/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useScrollSection } from "react-scroll-section"

import "./layout.css"

const StaticMenu = () => {
  const homeSection = useScrollSection("home")
  const portfolioSection = useScrollSection("portfolio")
  const aboutSection = useScrollSection("about")
  const contactSection = useScrollSection("contact")

  return (
    <ul className="nav-menu">
      <li onClick={homeSection.onClick} selected={homeSection.selected}>
        Home
      </li>
      <li
        onClick={portfolioSection.onClick}
        selected={portfolioSection.selected}
      >
        Portfolio
      </li>
      <li onClick={aboutSection.onClick} selected={aboutSection.selected}>
        About
      </li>
      <li onClick={contactSection.onClick} selected={contactSection.selected}>
        Contact
      </li>
    </ul>
  )
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <StaticMenu />
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          Jennifer Chow © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
