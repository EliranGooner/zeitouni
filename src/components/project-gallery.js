import React from "react"
import styles from "./project-gallery.module.scss"
import ElementFade from "react-reveal/Fade"
import Image from "./image"
import { SSRFriendlyFade } from "./SSRFriendlyFade"
import { SizeMe } from "react-sizeme"
import logoHerzliya from "../images/herzliya_logo.png"
import logoGvash from "../images/gvash_logo.png"

const fadeProperties = {
  arrows: true,
}

const ProjectGallery = ({
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  logo,
}) => {
  console.log(image4)
  return (
    <SizeMe>
      {({ size }) =>
        size.width > 1200 ? (
          <div className={styles.gallery}>
            <ElementFade right duration={3000}>
              <div className={styles.project_container}>
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
                <div className={styles.gallery_side}>
                  <img
                    src={logo === "gvash" ? logoGvash : logoHerzliya}
                    alt="לוגו הפרויקט"
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
                  {image4 ? (
                    <SSRFriendlyFade {...fadeProperties}>
                      <div className={styles.each_fade}>
                        <div className={styles.image_container}>
                          <Image imgName={image1} alt="בנייני הפרויקט" />
                        </div>
                      </div>
                      <div className={styles.each_fade}>
                        <div className={styles.image_container}>
                          <Image imgName={image2} alt="דירה 1 מהפרויקט" />
                        </div>
                      </div>
                      <div className={styles.each_fade}>
                        <div className={styles.image_container}>
                          <Image imgName={image3} alt="דירה 2 מהפרויקט" />
                        </div>
                      </div>
                      <div className={styles.each_fade}>
                        <div className={styles.image_container}>
                          <Image imgName={image4} alt="בנייני הפרויקט" />
                        </div>
                      </div>
                      <div className={styles.each_fade}>
                        <div className={styles.image_container}>
                          <Image imgName={image5} alt="בנייני הפרויקט" />
                        </div>
                      </div>
                      <div className={styles.each_fade}>
                        <div className={styles.image_container}>
                          <Image imgName={image6} alt="בנייני הפרויקט" />
                        </div>
                      </div>
                    </SSRFriendlyFade>
                  ) : (
                    <SSRFriendlyFade {...fadeProperties}>
                      <div className={styles.each_fade}>
                        <div className={styles.image_container}>
                          <Image imgName={image1} alt="בנייני הפרויקט" />
                        </div>
                      </div>
                      <div className={styles.each_fade}>
                        <div className={styles.image_container}>
                          <Image imgName={image2} alt="דירה 1 מהפרויקט" />
                        </div>
                      </div>
                      <div className={styles.each_fade}>
                        <div className={styles.image_container}>
                          <Image imgName={image3} alt="דירה 2 מהפרויקט" />
                        </div>
                      </div>
                    </SSRFriendlyFade>
                  )}
                </div>
                <div className={styles.gallery_side_medium}>
                  <img
                    src={logo === "gvash" ? logoGvash : logoHerzliya}
                    alt="לוגו הפרויקט"
                    className={styles.logo_medium}
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

export default ProjectGallery
