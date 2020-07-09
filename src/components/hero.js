import React from "react"
import styles from "./hero.module.scss"
import "react-slideshow-image/dist/styles.css"
import {
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"
import ElementFade from "react-reveal/Fade"
import zeitouniLogo from "../images/logo zeituni_w.png"
import { SSRFriendlyFade } from "./SSRFriendlyFade"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Image from "../components/image"

const fadeProperties = {
  arrows: false,
}

const Hero = () => {
  return (
    <div className={styles.hero} itemProp itemType="https://schema.org/Brand">
      <div className={styles.slide_container}>
        <SSRFriendlyFade {...fadeProperties}>
          <div className={styles.each_fade}>
            <div className={styles.image_container}>
              <Image
                imgName="zeitouni-hero-2.jpg"
                className={styles.image}
                alt="בנייני פרויקט גבעת שמואל"
                itemProp="image"
              />
            </div>
          </div>
          <div className={styles.each_fade}>
            <div className={styles.image_container}>
              <Image
                imgName="zeitouni-hero-1.jpg"
                className={styles.image}
                alt="בנייני פרויקט הרצליה"
                itemProp="image"
              />
            </div>
          </div>
        </SSRFriendlyFade>
      </div>
      <div className={styles.text_container}>
        <ElementFade duration={5000}>
          <img
            src={zeitouniLogo}
            height={1200}
            width={600}
            className={styles.logo_image}
            alt="לוגו זיתוני"
            itemProp="logo"
          ></img>
        </ElementFade>
      </div>
      <div className={styles.scroll} onClick={() => scroll.scrollMore(716.4)}>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </div>
  )
}

export default Hero
