import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, {useState} from "react";
import styles from './footer-small.module.scss';
import 'react-awesome-button/dist/themes/theme-red.css';
import './awesome-button.css';
import zeitouniLogo from '../images/zeitouni_slogan.png'
import devLogo from '../images/EZDev-Logo.png'
import Fade from 'react-reveal/Fade';
import { graphql, useStaticQuery } from "gatsby"


const FooterSmall = ({}) => {
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
    height: '45px',
    width: '700%',
    margin: '0 1px 1px 0',
    objectFit: 'cover'
  }
    return <div>
      <div className={styles.slogan}>
        <Fade duration={2500}>
          <img src={zeitouniLogo} height={400} width={800}></img>
        </Fade>
      </div>
      <div className={styles.footer}>
        <Link to='/accessibility/'>הצהרת נגישות</Link>
        <Link to='/sitemap/'>מפת אתר</Link>
          <a href='https://github.com/EliranGooner'><img src={devLogo} height={50} width={150} /></a>
      </div>
    </div>
};

export default FooterSmall