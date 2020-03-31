import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, {useState} from "react";
import styles from './project-gallery-small.module.scss';
import ElementFade from 'react-reveal/Fade';
import Image from "./image";
import { Fade } from 'react-slideshow-image';
import sizeMe from 'react-sizeme';


const fadeProperties = {
  indicators: true,
  arrows: false
}

const ProjectGallerySmall = ({image1, image2, image3, logo}) => {
  
  return <div className={styles.gallery}>
    <ElementFade duration={3000}>
    <div className={styles.project_container}>
      <div className={styles.gallery_side}>
        <Image imgName={logo}   />
      </div>
        <div className={styles.slide_container}>
          <Fade {...fadeProperties}>
            <div className={styles.each_fade}>
              <div className={styles.image_container}>
                <Image imgName={image1}   />
              </div>
            </div>
            <div className={styles.each_fade}>
              <div className={styles.image_container}>
                <Image imgName={image2}   />
              </div>
            </div>
            <div className={styles.each_fade}>
              <div className={styles.image_container}>
                <Image imgName={image3}   />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </ElementFade>
  </div>
};

export default ProjectGallerySmall
