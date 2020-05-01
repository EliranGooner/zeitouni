import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Carousel from "../components/carousel"
import AboutDiv from "../components/about-div"
import AboutAviDiv from "../components/about-avi-div"
import { Helmet } from "react-helmet"
import { css } from "@emotion/core"
import SyncLoader from "react-spinners/SyncLoader"

const override = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20rem;
  border-color: red;
`

const IndexPage = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  })
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
      <div className={`home-overlay ${loading && "show"}`}>
        <div className="sweet-loading">
          <SyncLoader
            css={override}
            size={30}
            color={"#000000"}
            loading={loading}
          />
        </div>
      </div>
      <Hero />
      <AboutDiv />
      <Carousel />
      <AboutAviDiv />
    </Layout>
  )
}

export default IndexPage
