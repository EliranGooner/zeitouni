import React from "react";
import styles from './project-gallery-small.module.scss';
import ElementFade from 'react-reveal/Fade';
import Image from "./image";
import { Fade } from 'react-slideshow-image';
import logoHerzliya from '../images/herzliya_logo.png';
import logoGvash from '../images/gvash_logo.png';


const fadeProperties = {
  indicators: true,
  arrows: false
}

const ProjectGallerySmall = ({image1, image2, image3, logo}) => {
  
  return <div className={styles.gallery}>
    <ElementFade duration={3000}>
    <div className={styles.project_container}>
      <div className={styles.gallery_side}>
        <img src={logo === 'gvash' ? logoGvash : logoHerzliya} alt='לוגו הפרויקט' itemProp='logo' className={styles.logo} />
      </div>
        <div className={styles.slide_container}>
          <Fade {...fadeProperties}>
            <div className={styles.each_fade}>
              <div className={styles.image_container}>
                <Image imgName={image1} alt='בנייני הפרויקט' itemProp='image' />
              </div>
            </div>
            <div className={styles.each_fade}>
              <div className={styles.image_container}>
                <Image imgName={image2} alt='דירה 1 מהפרויקט' itemProp='image' />
              </div>
            </div>
            <div className={styles.each_fade}>
              <div className={styles.image_container}>
                <Image imgName={image3} alt='דירה 2 מהפרויקט' itemProp='image' />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </ElementFade>
  </div>
};

export default ProjectGallerySmall
