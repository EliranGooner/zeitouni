import { Link } from "gatsby";
import React from "react";
import styles from './footer.module.scss';
import 'react-awesome-button/dist/themes/theme-red.css';
import './awesome-button.css';
import zeitouniLogo from '../images/zeitouni_slogan.png';
import Fade from 'react-reveal/Fade';
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
 

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
      <div className={styles.slogan} itemScope itemType='https://schema.org/Brand'>
        <Fade duration={2500}>
          <img src={zeitouniLogo} itemProp='logo' height={300} width={800} alt='לוגו זיתוני'></img>
        </Fade>
      </div>
      <div className={styles.footer}>
      <Link to='/sitemap/'>מפת אתר</Link>
        <div className={styles.dev}>
          <p>Designed & developed by</p>
          <a href='https://github.com/EliranGooner'><Img fluid={data.placeholderImage.childImageSharp.fluid} style={imgStyle} alt='לוגו פיתוח'/></a>
        </div>
        <Link to='/accessibility/'>הצהרת נגישות</Link>
      </div>
    </div>
};

export default Footer