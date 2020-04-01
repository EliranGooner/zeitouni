import React from "react";
import PageHero from '../components/page-hero';
import ArticlesContainer from '../components/articles-container';
import Layout from "../components/layout";
import SEO from "../components/seo";



const Articles = () => (
  <Layout>
    <SEO
    title='מהתקשורת'
    description='הפרויקטים שביצעה קבוצת זיתוני והבעלים שלה, אבי זיתוני, זוכים להערכה רבה בתקשורת הנדל״ן הישראלית. במקרים רבים אבי זיתוני רואיין למען מתן חוות דעת מקצועית על עולם הנדל״ן.'
    />
    <PageHero header='מהתקשורת' />
    <ArticlesContainer />
  </Layout>
)

export default Articles
