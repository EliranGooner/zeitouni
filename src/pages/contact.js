import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHero from "../components/page-hero";
import ContactDiv from '../components/contact-div';


const Contact = () => (
  <Layout>
    <SEO title="צרו קשר" 
    description='.אנא השאירו פרטים ונחזור אליכם בהקדם'
    />
    <PageHero header='יצירת קשר' />
    <ContactDiv />
  </Layout>
)

export default Contact
