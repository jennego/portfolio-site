import React from "react"

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
      id="home"
    >
      <div>
        <h1 className="main-title">Jennifer Chow</h1>
        <h2 className="main-subtitle">Web Developer</h2>

        {/* <div style={{ fontSize: "60px", textAlign: "center" }}>&#8744;</div> */}
      </div>
    </div>
  )
}

export default Home
