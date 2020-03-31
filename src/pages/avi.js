import React from "react"
import { Link } from "gatsby"
import PageHero from '../components/page-hero'
import AboutAviPage from '../components/about-avi-page'


import Layout from "../components/layout"



const Avi = () => (
  <Layout>
  <PageHero header='אבי זיתוני'/>
  <AboutAviPage />
  </Layout>
)

export default Avi
