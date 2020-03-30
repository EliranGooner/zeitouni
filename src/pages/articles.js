import React from "react"
import { Link } from "gatsby"
import PageHero from '../components/page-hero'
import ArticlesContainer from '../components/articles-container'


import Layout from "../components/layout"



const Articles = () => (
  <Layout>
    <PageHero header='מהתקשורת' />
    <ArticlesContainer />
  </Layout>
)

export default Articles
