import React from "react"
import styles from "./project-gallery-kfs.module.scss"
import ElementFade from "react-reveal/Fade"
import Image from "./image"
import { Fade } from "react-slideshow-image"
import { SizeMe } from "react-sizeme"
import logoKfs from "../images/eco_kfarsaba 2.jpg"

const fadeProperties = {
  arrows: true,
}

const ProjectGalleryKfs = ({ image1, image3, logo }) => {
  return (
    <SizeMe>
      {({ size }) =>
        size.width > 1200 ? (
          <div className={styles.gallery}>
            <ElementFade right duration={3000}>
              <div className={styles.project_container}>
                <div className={styles.slide_container}>
                  <Fade {...fadeProperties}>
                    <div className={styles.each_fade}>
                      <div className={styles.image_container}>
                        <Image
                          imgName={image1}
                          alt="בניין 1 פרויקט כפר סבא"
                          itemProp="image"
                        />
                      </div>
                    </div>
                    <div className={styles.each_fade}>
                      <div className={styles.image_container}>
                        <Image
                          imgName={image3}
                          alt="בניין 2 פרויקט כפר סבא"
                          itemProp="image"
                        />
                      </div>
                    </div>
                  </Fade>
                </div>
                <div className={styles.gallery_side}>
                  <img
                    src={logoKfs}
                    alt="לוגו פרויקט כפר סבא"
                    itemProp="logo"
                  />
                </div>
              </div>
            </ElementFade>
          </div>
        ) : (
          <div className={styles.gallery_medium}>
            <ElementFade right duration={3000}>
              <div className={styles.project_container}>
                <div className={styles.slide_container_medium}>
                  <Fade {...fadeProperties}>
                    <div className={styles.each_fade}>
                      <div className={styles.image_container}>
                        <Image imgName={image1} alt="בניין 1 פרויקט כפר סבא" />
                      </div>
                    </div>
                    <div className={styles.each_fade}>
                      <div className={styles.image_container}>
                        <Image imgName={image3} alt="בניין 2 פרויקט כפר סבא" />
                      </div>
                    </div>
                  </Fade>
                </div>
                <div className={styles.gallery_side_medium}>
                  <img
                    src={logoKfs}
                    alt="לוגו פרויקט כפר סבא"
                    itemProp="logo"
                  />
                </div>
              </div>
            </ElementFade>
          </div>
        )
      }
    </SizeMe>
  )
}

export default ProjectGalleryKfs
