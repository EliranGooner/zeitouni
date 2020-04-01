import { Link } from "gatsby";
import React from "react";
import styles from './footer-small.module.scss';
import 'react-awesome-button/dist/themes/theme-red.css';
import './awesome-button.css';
import zeitouniLogo from '../images/zeitouni_slogan.png';
import devLogo from '../images/EZDev-Logo.png';
import Fade from 'react-reveal/Fade';


const FooterSmall = () => {
    return <div>
      <div className={styles.slogan}>
        <Fade duration={2500}>
          <img src={zeitouniLogo} alt='לוגו זיתוני' height={400} width={800}></img>
        </Fade>
      </div>
      <div className={styles.footer}>
        <Link to='/accessibility/'>הצהרת נגישות</Link>
        <Link to='/sitemap/'>מפת אתר</Link>
          <a href='https://github.com/EliranGooner'><img src={devLogo} height={50} width={150} alt='לוגו פיתוח'/></a>
      </div>
    </div>
};

export default FooterSmall