import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, {useState} from "react";
import styles from './project-gallery.module.scss';
import ElementFade from 'react-reveal/Fade';
import zeitouniLogo from '../images/logo zeituni_w.png';
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
          <div className={styles.gallery_side}>
            <Image imgName={logo}   />
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
          <div className={styles.gallery_side_medium}>
            <Image imgName={logo}   />
          </div>
        </div>
      </ElementFade>
    </div>
}</SizeMe>
};

export default ProjectGallery
