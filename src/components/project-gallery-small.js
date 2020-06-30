import React from "react"
import styles from "./project-gallery-small.module.scss"
import ElementFade from "react-reveal/Fade"
import Image from "./image"
import { SSRFriendlyFade } from "./SSRFriendlyFade"
import logoHerzliya from "../images/herzliya_logo.png"
import logoGvash from "../images/gvash_logo.png"
import logoKfs from "../images/eco_kfarsaba 2.jpg"

const fadeProperties = {
  indicators: true,
  arrows: true,
}

const ProjectGallerySmall = ({
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  logo,
}) => {
  let logoImage
  if (logo === "gvash") {
    logoImage = logoGvash
  } else if (logo === "herzliya") {
    logoImage = logoHerzliya
  } else {
    logoImage = logoKfs
  }

  return (
    <div className={styles.gallery}>
      <ElementFade duration={3000}>
        <div className={styles.project_container}>
          <div className={styles.gallery_side}>
            <img
              src={logoImage}
              alt="לוגו הפרויקט"
              itemProp="logo"
              className={styles.logo}
            />
          </div>
          <div className={styles.slide_container}>
            {image4 ? (
              <SSRFriendlyFade {...fadeProperties}>
                <div className={styles.each_fade}>
                  <div className={styles.image_container}>
                    <Image
                      imgName={image1}
                      alt="בנייני הפרויקט"
                      itemProp="image"
                    />
                  </div>
                </div>
                <div className={styles.each_fade}>
                  <div className={styles.image_container}>
                    <Image
                      imgName={image2}
                      alt="דירה 1 מהפרויקט"
                      itemProp="image"
                    />
                  </div>
                </div>
                <div className={styles.each_fade}>
                  <div className={styles.image_container}>
                    <Image
                      imgName={image3}
                      alt="דירה 2 מהפרויקט"
                      itemProp="image"
                    />
                  </div>
                </div>
                <div className={styles.each_fade}>
                  <div className={styles.image_container}>
                    <Image
                      imgName={image4}
                      alt="בנייני הפרויקט"
                      itemProp="image"
                    />
                  </div>
                </div>
                <div className={styles.each_fade}>
                  <div className={styles.image_container}>
                    <Image
                      imgName={image5}
                      alt="בנייני הפרויקט"
                      itemProp="image"
                    />
                  </div>
                </div>
                <div className={styles.each_fade}>
                  <div className={styles.image_container}>
                    <Image
                      imgName={image6}
                      alt="בנייני הפרויקט"
                      itemProp="image"
                    />
                  </div>
                </div>
              </SSRFriendlyFade>
            ) : (
              <SSRFriendlyFade {...fadeProperties}>
                <div className={styles.each_fade}>
                  <div className={styles.image_container}>
                    <Image
                      imgName={image1}
                      alt="בנייני הפרויקט"
                      itemProp="image"
                    />
                  </div>
                </div>
                <div className={styles.each_fade}>
                  <div className={styles.image_container}>
                    <Image
                      imgName={image2}
                      alt="דירה 1 מהפרויקט"
                      itemProp="image"
                    />
                  </div>
                </div>
                <div className={styles.each_fade}>
                  <div className={styles.image_container}>
                    <Image
                      imgName={image3}
                      alt="דירה 2 מהפרויקט"
                      itemProp="image"
                    />
                  </div>
                </div>
              </SSRFriendlyFade>
            )}
          </div>
        </div>
      </ElementFade>
    </div>
  )
}

export default ProjectGallerySmall
