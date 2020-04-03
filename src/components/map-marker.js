import React from 'react';
import styles from './map-marker.module.scss';
import Image from './image';

const MapMarker = ({src}) => {

  return <div className={styles.img} itemScope itemType='https://schema.org/Product'>
    <Image imgName={src} className={styles.img} alt='לוגו הפרויקט' itemProp='logo'/>
  </div> 
}

export default MapMarker