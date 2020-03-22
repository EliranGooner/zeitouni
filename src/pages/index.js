import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Carousel from "../components/carousel"
import AboutDiv from "../components/about-div"
import AboutAviDiv from "../components/about-avi-div"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <AboutDiv />
    <Carousel />
    <AboutAviDiv />
  </Layout>
)

export default IndexPage
