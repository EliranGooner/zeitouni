import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PageHero from "../components/page-hero"
import ContactDiv from '../components/contact-div'


const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <PageHero header='יצירת קשר' />
    <ContactDiv />
  </Layout>
)

export default Contact
