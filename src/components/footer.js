import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, {useState} from "react";
import styles from './footer.module.scss';
import {AwesomeButtonSocial} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-red.css';
import './awesome-button.css';
import zeitouniLogo from '../images/zeitouni_slogan.png'
import Fade from 'react-reveal/Fade';
import Image from './image';
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
 

const Footer = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "EZDev-Logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1300, maxHeight: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const imgStyle = {
    height: '90px',
    width: '580%',
    margin: '0 18px 1px 0',
    objectFit: 'cover'
  }
    return <div>
      <div className={styles.slogan}>
        <Fade duration={2500}>
          <img src={zeitouniLogo} height={300} width={800}></img>
        </Fade>
      </div>
      <div className={styles.footer}>
      <Link to='/sitemap'>מפת אתר</Link>
        <div className={styles.dev}>
          <p>Designed & developed by</p>
          <Link to='/'><Img fluid={data.placeholderImage.childImageSharp.fluid} style={imgStyle}/></Link>
        </div>
        <Link to='/accessibility'>הצהרת נגישות</Link>
      </div>
    </div>
};

export default Footer