import React from "react"
import styles from "./project-card.module.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { AwesomeButton } from "react-awesome-button"
import "react-awesome-button/dist/themes/theme-red.css"
import "./awesome-button.css"
import Image from "./image"
import Fade from "react-reveal/Fade"
import { SizeMe } from "react-sizeme"

const ProjectCard = ({ header, src, path }) => {
  return (
    <SizeMe>
      {({ size }) =>
        size.width > 200 ? (
          <div
            className={styles.card}
            itemScope
            itemType="https://schema.org/ApartmentComplex"
          >
            <Image imgName={src} className={styles.img} alt="בנייני הפרויקט" />
            <div className={styles.text_container}>
              <div className={styles.inner}>
                <div className={styles.header_shadow}>
                  <Fade duration={3000}>
                    <h1 className={styles.underline} itemProp="name">
                      {header}
                    </h1>
                  </Fade>
                </div>
                {path ? (
                  <AniLink cover direction="right" bg="#808080" to={path}>
                    <AwesomeButton
                      type="primary"
                      className="aws-btn"
                      size="large"
                    >
                      לצפייה בפרויקט
                    </AwesomeButton>
                  </AniLink>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          <div
            className={styles.card_small}
            itemScope
            itemType="https://schema.org/ApartmentComplex"
          >
            <Image imgName={src} className={styles.img} alt="בנייני הפרויקט" />
            <div className={styles.text_container}>
              <div className={styles.inner_small}>
                <div className={styles.header_shadow_small}>
                  <Fade duration={3000}>
                    <h1 itemProp="name">{header}</h1>
                  </Fade>
                </div>
                {path ? (
                  <AniLink cover direction="right" bg="#808080" to={path}>
                    <AwesomeButton
                      type="primary"
                      className="aws-btn"
                      size="large"
                    >
                      לצפייה בפרויקט
                    </AwesomeButton>
                  </AniLink>
                ) : null}
              </div>
            </div>
          </div>
        )
      }
    </SizeMe>
  )
}

export default ProjectCard
