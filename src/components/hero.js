import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, {useState} from "react";
import styles from './hero.module.scss';
import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import ElementFade from 'react-reveal/Fade';
import zeitouniLogo from '../images/logo zeituni_w.png';
import Image from "./image";
import { Fade } from 'react-slideshow-image';
import sizeMe from 'react-sizeme';


const fadeProperties = {
  arrows: false
}


const Hero = (props) => {
  const { width, height } = props.size;

  return <div className={styles.hero}>
    <div className={styles.slide_container}>
      <Fade {...fadeProperties}>
        <div className={styles.each_fade}>
          <div className={styles.image_container}>
            <Image imgName='zeitouni-hero-1.jpg' className={width > 900 ? '' : styles.image_small}  />
          </div>
        </div>
        <div className={styles.each_fade}>
          <div className={styles.image_container}>
            <Image imgName='zeitouni-hero-2.jpg'  className={width > 900 ? '' : styles.image_small} />
          </div>
        </div>
      </Fade>
    </div>
      <div className={styles.text_container}>
        <ElementFade duration={5000}>
          <img src={zeitouniLogo} height={1200} width={600} className={width > 900 ? styles.logo_image : styles.logo_image_small}></img>
        </ElementFade>
      </div>
    <div className={styles.scroll} onClick={() => scroll.scrollMore(716.4)}>
      <a href="#" ><span></span><span></span><span></span></a>
    </div>
  </div>
};

export default sizeMe({ monitorWidth: true })(Hero)
