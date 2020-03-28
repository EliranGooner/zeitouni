import React from 'react';
import styles from './map-marker.module.scss'
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Image from './image'
import { SizeMe } from 'react-sizeme'

const MapMarker = ({src}) => {

  return <div className={styles.img}>
    <Image imgName={src} className={styles.img} />
  </div> 
}

export default MapMarker