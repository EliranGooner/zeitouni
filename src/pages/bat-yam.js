import React from "react"
import styles from '../components/bat-yam.module.scss'
import PageHero from '../components/page-hero'
import ProjectHeader from '../components/project-header'
import ProjectGallery from '../components/project-gallery'
import ProjectGallerySmall from '../components/project-gallery-small'
import ProjectContent from '../components/project-content'
import ProjectContentSmall from '../components/project-content-small'
import sizeMe from 'react-sizeme';
import Image from '../components/image'



import Layout from "../components/layout"


const Herlizya = (props) => {
  const { width, height } = props.size;

  let CurrentProjectGallery 
  let CurrentProjectContent 
  if (width > 420) {
    CurrentProjectGallery = <ProjectGallery image1='zeitouni-hero-1.jpg' image2='zeitouni-hero-2.jpg' image3='zeitouni-hero-1.jpg' logo='gvash-logo.jpg' />
    CurrentProjectContent = <ProjectContent project='bat-yam' />
  } else {
    CurrentProjectGallery = <ProjectGallerySmall image1='zeitouni-hero-1.jpg' image2='zeitouni-hero-2.jpg' image3='zeitouni-hero-1.jpg' logo='gvash-logo.jpg' />
    CurrentProjectContent = <ProjectContentSmall project='bat-yam' />
  }


  return <Layout>
    <PageHero header='פרויקטים' />
    <ProjectHeader header='פארק ים בת-ים' />
    <div className={styles.head}>
      <div className={styles.logo}>
        <Image imgName='bat-yam_logo.png' />
      </div>
    </div>
    <div className={styles.soon}>
      <h1>...פרטים נוספים בקרוב</h1>
    </div>
  </Layout>
}

export default sizeMe({ monitorWidth: true })(Herlizya)
