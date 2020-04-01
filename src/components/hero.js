import React from "react";
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
  const { width } = props.size;
  let heroImageFirst
  let heroImageSecond
  420 > width ? heroImageFirst = 'zeitouni-home-1.jpg' : heroImageFirst = 'zeitouni-hero-1.jpg'
  420 > width ? heroImageSecond = 'zeitouni-home-2.jpg' : heroImageSecond = 'zeitouni-hero-2.jpg'
  const widthCheckImage = (deviceWidth) => {
    if (1100 > deviceWidth && deviceWidth > 450) {
      return styles.image_medium
    } else if (450 > deviceWidth) {
      return styles.image_small
    }
  }
  const widthCheckLogo = (deviceWidth) => {
    if (deviceWidth > 1100) {
      return styles.logo_image
    } else if (1100 > deviceWidth && deviceWidth > 450) {
      return styles.logo_image_medium
    } else {

      return styles.logo_image_small
    }
  }
  return <div className={styles.hero}>
    <div className={styles.slide_container}>
      <Fade {...fadeProperties}>
        <div className={styles.each_fade}>
          <div className={styles.image_container}>
            <Image imgName={heroImageFirst} className={widthCheckImage(width)} alt='בנייני פרויקט גבעת שמואל'  />
          </div>
        </div>
        <div className={styles.each_fade}>
          <div className={styles.image_container}>
            <Image imgName={heroImageSecond}  className={widthCheckImage(width)} alt='בנייני פרויקט הרצלייה' />
          </div>
        </div>
      </Fade>
    </div>
      <div className={styles.text_container}>
        <ElementFade duration={5000}>
          <img src={zeitouniLogo} height={1200} width={600} className={widthCheckLogo(width)} alt='לוגו זיתוני'></img>
        </ElementFade>
      </div>
    <div className={width < 1100 && width > 400 ? styles.scroll_medium : styles.scroll} onClick={() => scroll.scrollMore(716.4)}>
      <a href="#" ><span></span><span></span><span></span></a>
    </div>
  </div>
};

export default sizeMe({ monitorWidth: true })(Hero)
