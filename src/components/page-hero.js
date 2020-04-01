import React from "react";
import styles from './page-hero.module.scss';
import Image from "./image";
import divider from '../images/title-divider-white.png';
import Fade from 'react-reveal/Fade';



const PageHero = ({header}) => {
  
  return <div className={styles.hero}>
    <div className={styles.header}>
      <Fade duration={4500}>
        <h1>{header}</h1>
        <img src={divider} height={30} width={200} alt='חוצץ' />
      </Fade>
    </div>
    <Image imgName='zeitouni-herzliya.jpg' className={styles.image} img='תמונת רקע דירה פרויקט הרצליה'/>
  </div>
};

export default PageHero
