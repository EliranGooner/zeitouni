import React from "react"
import { Link } from "gatsby"
import PageHero from '../components/page-hero'


import Layout from "../components/layout"
import AboutPage from "../components/about-page"



const About = () => (
  <Layout>
    <PageHero header='עלינו'/>
    <AboutPage />
  </Layout>
)

export default About
