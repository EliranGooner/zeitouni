import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import styles from './footer.module.scss'
import {AwesomeButtonSocial} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-red.css';
import './awesome-button.css'


const Footer = ({}) => {
    return <div className={styles.footer}>
      <div>
        <AwesomeButtonSocial
        type="facebook"
        url="https://www.facebook.com/Zeitouni.Group.ltd.IL/"
        className='aws-btn'>
        </AwesomeButtonSocial>
        <AwesomeButtonSocial
        type="instagram"
        url="https://www.instagram.com/zeitounigroupltd/"
        className='aws-btn'>
        </AwesomeButtonSocial>
      </div>
      <div className={styles.dev}>
        <p>Designed & developed by</p>
        <Link to='/'>Eliran Zeitouni</Link>
      </div>
      <div>
          <Link to='/sitemap'>מפת אתר</Link>
          <Link to='/accessibility'>הצהרת נגישות</Link>
      </div>
    </div>
};

export default Footer