import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

import Home from "../components/sections/landing-page"
import Portfolio from "../components/sections/portfolio"
import About from "../components/sections/about"
import Contact from "../components/sections/contact"
import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from "react-scroll-section"

const IndexPage = () => {
  return (
    <div>
      <ScrollingProvider>
        <Layout>
          <Seo title="Home" />
          <Home />
          <Portfolio />
          <About />
          <Contact />
        </Layout>
      </ScrollingProvider>
    </div>
  )
}

export default IndexPage
