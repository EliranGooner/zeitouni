import React from "react"
import PageHero from '../components/page-hero'
import SitemapContent from '../components/sitemap-content'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Sitemap = () => (
  <Layout>
    <SEO title="מפת האתר" />
    <PageHero header='מידע'/>
    <SitemapContent />
  </Layout>
)

export default Sitemap
