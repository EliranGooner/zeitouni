import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import styles from './hero.module.scss'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import { isWidthUp } from "@material-ui/core";
import * as Scroll from 'react-scroll';
import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import imageHero from '../images/hero-zeitouni.jpg'
import Fade from 'react-reveal/Fade';
import zeitouniLogo from '../images/zeitouni-logo.svg'
 


const Hero = ({}) => {
    return <div className={styles.hero}>
      <img src={imageHero} className={styles.img}></img>
      <div className={styles.text_container}>
        <div className={styles.inner}>
          <div className={styles.header_shadow}>
            <Fade duration={2500}>
              <img src={zeitouniLogo}></img>
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