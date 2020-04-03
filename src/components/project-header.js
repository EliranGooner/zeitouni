import React from "react";
import styles from './project-header.module.scss';
import divider from '../images/title-divider.png';
import Fade from 'react-reveal/Fade';



const ProjectHeader = ({header}) => {
  
  return <div className={styles.header} itemScope itemType='https://schema.org/ApartmentComplex'>
    <div className={styles.inner_text}>
      <Fade duration={4500}>
        <h1 itemProp='name'>{header}</h1>
        <img src={divider} height={30} width={350} alt='חוצץ'/>
      </Fade>
    </div>
  </div>
};

export default ProjectHeader
