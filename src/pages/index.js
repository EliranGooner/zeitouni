import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import HeroSmall from "../components/hero-small";
import Carousel from "../components/carousel";
import AboutDiv from "../components/about-div";
import AboutDivSmall from "../components/about-div-small";
import AboutAviDiv from "../components/about-avi-div";
import AboutAviDivSmall from '../components/about-avi-div-small';
import sizeMe from 'react-sizeme';


const IndexPage = (props) => {
  const { width } = props.size;

  const ToRenderChildAboutDiv = width > 900
    ? AboutDiv
    : AboutDivSmall;
    
  const ToRenderChildAviDiv = width > 900
    ? AboutAviDiv
    : AboutAviDivSmall;

  const ToRenderChildHero = width > 900
    ? Hero
    : HeroSmall;

  return ( <Layout>
    <SEO title="בית - קבוצת זיתוני"
    description='קבוצת זיתוני הינה קבוצת חברות בנייה המתמחה בייזום, בתכנון, בבנייה ובשיווק למגורים בהרצלייה, גבעת שמואל, בת ים וברחבי השרון וגוש דן.  בואו להנות מחווית המגורים המושלמת.' 
    />
    <ToRenderChildHero />
    <ToRenderChildAboutDiv />
    <Carousel />
    <ToRenderChildAviDiv />
  </Layout>
  );
}

export default sizeMe({ monitorWidth: true })(IndexPage)
