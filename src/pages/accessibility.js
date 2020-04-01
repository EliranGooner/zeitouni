import React from "react";
import PageHero from '../components/page-hero';
import AccessibilityContent from '../components/accessibility-content';
import Layout from "../components/layout";
import SEO from "../components/seo";

const Accessibility = () => (
  <Layout>
    <SEO title="הצהרת נגישות"
    description='האינטרנט מהווה כיום את המאגר הגדול ביותר לחופש המידע עבור כלל המשתמשים ומשתמשים בעלי מוגבלויות בפרט. ככזה, אנו שמים חשיבות רבה במתן אפשרות שווה לאנשים עם מוגבלות לשימוש במידע המוצג באתר ולאפשר חווית גלישה טובה יותר.' />
    <PageHero header='הצהרת נגישות'/>
    <AccessibilityContent />
  </Layout>
)

export default Accessibility
