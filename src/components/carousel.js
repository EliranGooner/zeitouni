import React from 'react';
import Flickity from 'react-flickity-component'
import { Link } from "gatsby"
import "./flickity.css";
import CarouselSlide from './carousel-slide';
import styles from './carousel.module.scss'
import imageHerzliya from '../images/zeitouni-herzliya.jpg'
import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-red.css';
import './awesome-button.css'



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
    <div>
      <div className={styles.header}>
          <p>פרויקטים</p>
      </div>
      <Flickity
        className={styles.carousel} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options 
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        <CarouselSlide header="אקו רמת הדר חדשה גבעת שמואל" image={imageHerzliya} path='/projects/'  />
        <CarouselSlide header="אקו רמת הדר חדשה גבעת שמואל" image={imageHerzliya} path='/projects/'  />
        <CarouselSlide header="אקו רמת הדר חדשה גבעת שמואל" image={imageHerzliya} path='/projects/'  />
        <CarouselSlide header="אקו רמת הדר חדשה גבעת שמואל" image={imageHerzliya} path='/projects/'  />
        <CarouselSlide header="אקו רמת הדר חדשה גבעת שמואל" image={imageHerzliya} path='/projects/'  />
      
        
      </Flickity>
      <div className={styles.all_projects}>
          <Link to='/projects'><AwesomeButton type="primary" className='aws-btn'>לכל הפרויקטים</AwesomeButton></Link>
      </div>
    </div>
  )
}

export default Carousel