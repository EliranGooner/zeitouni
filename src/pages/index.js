import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styles from "./index.module.scss"
import Hero from "../components/hero"
import Carousel from "../components/carousel"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Carousel />
  </Layout>
)

export default IndexPage
