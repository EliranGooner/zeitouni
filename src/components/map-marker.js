import React from 'react';
import styles from './map-marker.module.scss';
import Image from './image';

const MapMarker = ({src}) => {

  return <div className={styles.img}>
    <Image imgName={src} className={styles.img} alt='לוגו הפרויקט' />
  </div> 
}

export default MapMarker