import React from 'react';
import styles from './carousel-slide.module.scss'
import { Link } from "gatsby"
import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-red.css';
import './awesome-button.css'


const CarouselSlide = ({header, image, path}) => {
  return (
    <div className={styles.CarouselSlide}>
      <img src={image} className={styles.img}></img>
      <div className={styles.text_container}>
        <div className={styles.inner}>
          <div className={styles.header_shadow}>
            <h1>{header}</h1>
          </div>
          <Link to={path}><AwesomeButton type="primary" className='aws-btn'>לצפייה בפרויקט</AwesomeButton></Link>
        </div>
      </div>
    </div>
  )
}

export default CarouselSlide