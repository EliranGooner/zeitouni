import React from 'react';
import styles from './carousel-slide.module.scss'


const CarouselSlide = ({header, content}) => {
  return (
    <div className={styles.CarouselSlide}>
      <h1>{header}</h1>
      <p>{content}</p>
    </div>
  )
}

export default CarouselSlide