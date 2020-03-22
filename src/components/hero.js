import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import styles from './hero.module.scss'
import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import imageHero from '../images/hero-zeitouni.jpg'
import Fade from 'react-reveal/Fade';
import zeitouniLogo from '../images/logo 2.svg'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
 


const Hero = () => {
  const height = 750
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero-zeitouni.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1300, maxHeight: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return <div className={styles.hero}>
    <Img fluid={data.placeholderImage.childImageSharp.fluid} className={styles.img} />
      <div className={styles.text_container}>
        <div className={styles.inner}>
          <div className={styles.header_shadow}>
            <Fade duration={3000}>
              <img src={zeitouniLogo} height={200} width={600}></img>
            </Fade>
          </div>
        </div>
      </div>
    
        <div className={styles.scroll} onClick={() => scroll.scrollMore(716.4)}>
          <a href="#"><span></span><span></span><span></span></a>
        </div>
    </div>
};

export default Hero
