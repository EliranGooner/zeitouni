import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, {useState} from "react";
import styles from './footer.module.scss';
import {AwesomeButtonSocial} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-red.css';
import './awesome-button.css';
import zeitouniLogo from '../images/logo 2.svg'
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
    height: '80px',
    width: '500%',
    margin: '0 13px 0 0'
  }
    return <div>
      <div className={styles.slogan}>
        <Fade duration={2500}>
          <img src={zeitouniLogo} height={150} width={400}></img>
          <h5>חוויית המגורים המושלמת</h5>
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