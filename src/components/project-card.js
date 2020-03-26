import React , {useMemo} from 'react';
import styles from './project-card.module.scss'
import { Link } from "gatsby"
import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-red.css';
import './awesome-button.css'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Image from './image'
import Fade from 'react-reveal/Fade';
import { SizeMe } from 'react-sizeme'

const ProjectCard = ({header, src, path}) => {

  return (
    <div className={styles.card}>
    <Image imgName={src} className={styles.img} />
      <div className={styles.text_container}>
        <div className={styles.inner}>
        <SizeMe>{({ size }) => size.width > 100 ?
          <div className={styles.header_shadow}>
          <Fade duration={3000}>
            <h1>{header}</h1>
          </Fade>
        </div>
        :
        <div className={styles.header_shadow_small}>
            <Fade duration={3000}>
              <h1>{header}</h1>
            </Fade>
          </div>
      }</SizeMe>
          <Link to={path}><AwesomeButton type="primary" className='aws-btn'>לצפייה בפרויקט</AwesomeButton></Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard