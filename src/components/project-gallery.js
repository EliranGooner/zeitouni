import React from "react";
import styles from './project-gallery.module.scss';
import ElementFade from 'react-reveal/Fade';
import Image from "./image";
import { Fade } from 'react-slideshow-image';
import { SizeMe } from 'react-sizeme';


const fadeProperties = {
  arrows: true
}

const ProjectGallery = ({image1, image2, image3, logo}) => {
  
  return <SizeMe>{({ size }) => size.width > 1200 ?
    <div className={styles.gallery}>
      <ElementFade right duration={3000}>
        <div className={styles.project_container}>
          <div className={styles.slide_container}>
            <Fade {...fadeProperties}>
              <div className={styles.each_fade}>
                <div className={styles.image_container}>
                  <Image imgName={image1} alt='בנייני הפרויקט' itemProp='image' />
                </div>
              </div>
              <div className={styles.each_fade}>
                <div className={styles.image_container}>
                  <Image imgName={image2} alt='דירה 1 מהפרויקט' itemProp='image'  />
                </div>
              </div>
              <div className={styles.each_fade}>
                <div className={styles.image_container}>
                  <Image imgName={image3} alt='דירה 2 מהפרויקט' itemProp='image' />
                </div>
              </div>
            </Fade>
          </div>
          <div className={styles.gallery_side}>
            <Image imgName={logo} alt='לוגו הפרויקט' itemProp='logo'  />
          </div>
        </div>
      </ElementFade>
    </div>
  :
    <div className={styles.gallery_medium}>
      <ElementFade right duration={3000}>
        <div className={styles.project_container}>
          <div className={styles.slide_container_medium}>
            <Fade {...fadeProperties}>
              <div className={styles.each_fade}>
                <div className={styles.image_container}>
                  <Image imgName={image1}  alt='בנייני הפרויקט' />
                </div>
              </div>
              <div className={styles.each_fade}>
                <div className={styles.image_container}>
                  <Image imgName={image2}  alt='דירה 1 מהפרויקט' />
                </div>
              </div>
              <div className={styles.each_fade}>
                <div className={styles.image_container}>
                  <Image imgName={image3}  alt='דירה 2 מהפרויקט' />
                </div>
              </div>
            </Fade>
          </div>
          <div className={styles.gallery_side_medium}>
            <Image imgName={logo} alt='לוגו הפרויקט'  />
          </div>
        </div>
      </ElementFade>
    </div>
}</SizeMe>
};

export default ProjectGallery
