import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, {useState} from "react";
import styles from './page-hero.module.scss';
import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import ElementFade from 'react-reveal/Fade';
import zeitouniLogo from '../images/logo zeituni_w.png';
import Image from "./image";
import sizeMe from 'react-sizeme';
import divider from '../images/title-divider-white.png';
import Fade from 'react-reveal/Fade';



const PageHero = ({header}) => {
  
  return <div>
    <div className={styles.hero}>
      <div className={styles.header}>
        <Fade duration={4500}>
          <h1>{header}</h1>
          <img src={divider} height={30} width={200}/>>
        </Fade>
      </div>
      <Image imgName='zeitouni-herzliya.jpg' className={styles.image}/>
    </div>
  </div>
};

export default PageHero
