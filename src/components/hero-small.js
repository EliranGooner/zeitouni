import React from "react"
import styles from "./hero.module.scss"
import {
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"
import ElementFade from "react-reveal/Fade"
import zeitouniLogo from "../images/logo zeituni_w.png"
import { Fade } from "react-slideshow-image"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const fadeProperties = {
  arrows: false,
}

const HeroSmall = () => {
  const data = useStaticQuery(graphql`
    query imageQuery {
      allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "home" }
        }
      ) {
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

  return (
    <div className={styles.hero} itemProp itemType="https://schema.org/Brand">
      <div className={styles.slide_container}>
        <Fade {...fadeProperties}>
          {data.allFile.edges.map(({ node }) => (
            <div className={styles.each_fade}>
              <div className={styles.image_container}>
                <Img
                  fluid={node.childImageSharp.fluid}
                  className={styles.image_small}
                  alt="בנייני פרויקט"
                  itemProp="image"
                />
              </div>
            </div>
          ))}
        </Fade>
      </div>
      <div className={styles.text_container}>
        <ElementFade duration={5000}>
          <img
            src={zeitouniLogo}
            height={1200}
            width={600}
            className={styles.logo_image_small}
            alt="לוגו זיתוני"
            itemProp="logo"
          ></img>
        </ElementFade>
      </div>
      <div className={styles.scroll} onClick={() => scroll.scrollMore(716.4)}>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </div>
  )
}

export default HeroSmall
