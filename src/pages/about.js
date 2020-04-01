import React from "react";
import PageHero from '../components/page-hero';
import SEO from "../components/seo";
import Layout from "../components/layout";
import AboutPage from "../components/about-page";



const About = () => (
  <Layout>
    <SEO title="עלינו"
    description='החזון מאחורי פעילות הקבוצה הוא להגשים חלומות עבור זוגות צעירים ומשפרי דיור שחולמים על בית חדש, מודרני ומעוצב באזור יפה ומבוקש.'
     />
    <PageHero header='עלינו'/>
    <AboutPage />
  </Layout>
)

export default About
