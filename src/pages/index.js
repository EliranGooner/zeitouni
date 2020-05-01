import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Carousel from "../components/carousel"
import AboutDiv from "../components/about-div"
import AboutAviDiv from "../components/about-avi-div"
import { Helmet } from "react-helmet"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="בית - קבוצת זיתוני"
        description="קבוצת זיתוני הינה קבוצת חברות בנייה המתמחה בייזום, בתכנון, בבנייה ובשיווק למגורים בהרצלייה, גבעת שמואל, בת ים וברחבי השרון וגוש דן.  בואו להנות מחווית המגורים המושלמת."
      />
      <Helmet>
        <meta
          name="google-site-verification"
          content="nNxHHGf6iKF31lnzDKue5h00vCt38CqZJ4RPzqDK_1U"
        />
      </Helmet>
      <Hero />
      <AboutDiv />
      <Carousel />
      <AboutAviDiv />
    </Layout>
  )
}

export default IndexPage
