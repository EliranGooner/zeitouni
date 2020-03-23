import React , {useMemo} from 'react';
import styles from './carousel-slide.module.scss'
import { Link } from "gatsby"
import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-red.css';
import './awesome-button.css'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Image from './image'
import Fade from 'react-reveal/Fade';

const CarouselSlide = ({header, src, path}) => {
  
  return (
    <div className={styles.CarouselSlide}>
    <Image imgName={src} className={styles.img} />
      <div className={styles.text_container}>
        <div className={styles.inner}>
          <div className={styles.header_shadow}>
            <Fade duration={3000}>
              <h1>{header}</h1>
            </Fade>
          </div>
          <Link to={path}><AwesomeButton type="primary" className='aws-btn'>לצפייה בפרויקט</AwesomeButton></Link>
        </div>
      </div>
    </div>
  )
}

export default CarouselSlide