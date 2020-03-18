import React from 'react';
import Flickity from 'react-flickity-component'
import "./flickity.css";
import CarouselSlide from './carousel-slide';
import styles from './carousel.module.scss'


const flickityOptions = {
  initialIndex: 3,
  wrapAround: true,
  autoPlay: 3000,
  selectedAttraction: 0.01,
  friction: 0.15,
  freeScroll: true,
  freeScrollFriction: 0.03
}


const Carousel = () => {
  return (
    <Flickity
      className={styles.carousel} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options 
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <CarouselSlide header="אקו רמת הדר חדשה גבעת שמואל"  />
      <CarouselSlide header="אקו רמת הדר חדשה גבעת שמואל"  />
      <CarouselSlide header="אקו רמת הדר חדשה גבעת שמואל"  />
    </Flickity>
  )
}

export default Carousel