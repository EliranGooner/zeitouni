import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from "react"
import styles from "./footer-small.module.scss"
import "react-awesome-button/dist/themes/theme-red.css"
import "./awesome-button.css"
import zeitouniLogo from "../images/zeitouni_slogan.png"
import devLogo from "../images/EZDev-Logo.png"
import Fade from "react-reveal/Fade"

const FooterSmall = () => {
  return (
    <div>
      <div
        className={styles.slogan}
        itemScope
        itemType="https://schema.org/Brand"
      >
        <Fade duration={2500}>
          <img
            src={zeitouniLogo}
            itemProp="logo"
            alt="לוגו זיתוני"
            height={400}
            width={800}
          ></img>
        </Fade>
      </div>
      <div className={styles.footer}>
        <AniLink cover direction="right" bg="#808080" to="/accessibility/">
          הצהרת נגישות
        </AniLink>
        <AniLink cover direction="right" bg="#808080" to="/sitemap/">
          מפת אתר
        </AniLink>
        <a href="https://github.com/EliranGooner">
          <img src={devLogo} height={50} width={150} alt="לוגו פיתוח" />
        </a>
      </div>
    </div>
  )
}

export default FooterSmall
