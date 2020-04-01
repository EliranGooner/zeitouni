import React from "react";
import PageHero from '../components/page-hero';
import AboutAviPage from '../components/about-avi-page';
import SEO from "../components/seo";


import Layout from "../components/layout"



const Avi = () => (
  <Layout>
  <SEO
    title='אבי זיתוני'
    description='אבי זיתוני, שנולד בבת ים וגדל בכפר סבא, הוא דור שני למשפחת קבלנים. בתחילת שנות ה-80, לאחר שהשתחרר מהצבא, החל אבי זיתוני לעבוד כשכיר אצל היזמים משה ויגאל גינדי.'
    />
  <PageHero header='אבי זיתוני'/>
  <AboutAviPage />
  </Layout>
)

export default Avi
