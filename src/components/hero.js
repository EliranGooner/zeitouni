import React from "react";
import styles from './hero.module.scss';
import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import ElementFade from 'react-reveal/Fade';
import zeitouniLogo from '../images/logo zeituni_w.png';
import Image from "./image";
import { Fade } from 'react-slideshow-image';
import sizeMe from 'react-sizeme';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";


const fadeProperties = {
  arrows: false
}

const Hero = (props) => {
  const { width } = props.size;
  const widthCheckImage = (deviceWidth) => {
    if (1100 > deviceWidth && deviceWidth > 450) {
      return styles.image_medium
    }
  }
  const widthCheckLogo = (deviceWidth) => {
    if (deviceWidth > 1100) {
      return styles.logo_image
    } else if (1100 > deviceWidth && deviceWidth > 450) {
      return styles.logo_image_medium
    } 
  }

  const checkScroll = (deviceWidth) => {
    if ( 1100 > deviceWidth ) {
      return styles.scroll_medium
    } else if (1800 > deviceWidth && deviceWidth > 1100 ) {
      return styles.scroll
    } else {
      return styles.scroll_large
    }
  }

  const data = useStaticQuery(graphql`
      query heroQuery {
    allFile(filter: {extension: {regex: "/(jpg)/"}, relativeDirectory: {eq: "hero"}}) {
      edges {
        node {
          base
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
    }
  `)

  return <div className={styles.hero} itemProp itemType='https://schema.org/Brand'>
    <div className={styles.slide_container}>
      <Fade {...fadeProperties}>
        {data.allFile.edges.map(({node}) => (
          <div className={styles.each_fade}>
            <div className={styles.image_container}>
              <Img 
              fluid={node.childImageSharp.fluid} className={widthCheckImage(width)} alt='בנייני פרויקט גבעת שמואל' itemProp='image' 
              />
            </div>
          </div>
        ))}
      </Fade>
    </div>
      <div className={styles.text_container}>
        <ElementFade duration={5000}>
          <img src={zeitouniLogo} height={1200} width={600} className={widthCheckLogo(width)} alt='לוגו זיתוני' itemProp='logo'></img>
        </ElementFade>
      </div>
    <div className={checkScroll(width)} onClick={() => scroll.scrollMore(716.4)}>
      <a href="#" ><span></span><span></span><span></span></a>
    </div>
  </div>
};

export default sizeMe({ monitorWidth: true })(Hero)
