import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import styles from './footer.module.scss'
import {AwesomeButtonSocial} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-red.css';
import './awesome-button.css'
import zeitouniLogo from '../images/logo 2.svg'
import Fade from 'react-reveal/Fade';


const Footer = ({}) => {
    return <div>
      <div className={styles.slogan}>
        <Fade duration={2500}>
          <img src={zeitouniLogo} height={150} width={400}></img>
          <h5>חוויית המגורים המושלמת</h5>
        </Fade>
      </div>
      <div className={styles.footer}>
        <div className={styles.dev}>
          <p>Designed & developed by</p>
          <Link to='/'>Eliran Zeitouni</Link>
        </div>
        <div>
            <Link to='/sitemap'>מפת אתר</Link>
            <Link to='/accessibility'>הצהרת נגישות</Link>
        </div>
      </div>
    </div>
};

export default Footer