import React from 'react';
import styles from './carousel-slide.module.scss'
import { Link } from "gatsby"


const CarouselSlide = ({header, image, path}) => {
  const imageStyle = {
    backgroundImage: 'url(' + image + ')',
  };
  
  return (
    <div className={styles.CarouselSlide} style={imageStyle}>
      <h1>{header}</h1>
      <Link to={path}><button>לצפייה בפרויקט</button></Link>
    </div>
  )
}

export default CarouselSlide