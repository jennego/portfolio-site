import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { Section, useScrollSection } from "react-scroll-section"

const Home = () => {
  const portfolioSection = useScrollSection("portfolio")

  return (
    <Section id="home">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "98vh",
        }}
      >
        <div>
          <h1 className="main-title">Jennifer Chow</h1>
          <h2 className="main-subtitle">Web Developer</h2>

          <div style={{ textAlign: "center", paddingTop: "2rem" }}>
            <FontAwesomeIcon
              className="scroll-down"
              icon={faChevronDown}
              size="2x"
              onClick={portfolioSection.onClick}
              selected={portfolioSection.selected}
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Home
