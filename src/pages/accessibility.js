import React from "react"
import PageHero from '../components/page-hero'
import AccessibilityContent from '../components/accessibility-content'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Accessibility = () => (
  <Layout>
    <SEO title="הצהרת נגישות" />
    <PageHero header='הצהרת נגישות'/>
    <AccessibilityContent />
  </Layout>
)

export default Accessibility
