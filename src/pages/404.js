import React from "react"
import 'react-awesome-button/dist/themes/theme-red.css';
import '../components/awesome-button.css';
import PageHero from '../components/page-hero';

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: הדף לא נמצא" />
    <PageHero header='מצטערים, הדף לא נמצא'/>
  </Layout>
)

export default NotFoundPage
