import React from 'react';
import styles from './map-marker.module.scss';
import logoHerzliya from '../images/herzliya_logo.png';
import logoGvash from '../images/gvash_logo.png';

const MapMarker = ({src}) => {

  return <div className={styles.img} itemScope itemType='https://schema.org/Product'>
    <img src={src === 'gvash' ? logoGvash : logoHerzliya} className={styles.img} alt='לוגו הפרויקט' itemProp='logo'/>
  </div> 
}

export default MapMarker