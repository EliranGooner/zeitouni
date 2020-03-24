import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Carousel from "../components/carousel";
import AboutDiv from "../components/about-div";
import AboutAviDiv from "../components/about-avi-div";
import AboutAviDivSmall from '../components/about-avi-div-small';
import sizeMe from 'react-sizeme';


const IndexPage = (props) => {
  const { width, height } = props.size;

  const ToRenderChild = width > 900
    ? AboutAviDiv
    : AboutAviDivSmall;

  return ( <Layout>
    <SEO title="Home" />
    <Hero />
    <AboutDiv />
    <Carousel />
    <ToRenderChild />
  </Layout>
  );
}

export default sizeMe({ monitorWidth: true })(IndexPage)
