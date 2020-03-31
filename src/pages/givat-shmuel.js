import React from "react"
import PageHero from '../components/page-hero'
import ProjectHeader from '../components/project-header'
import ProjectGallery from '../components/project-gallery'
import ProjectGallerySmall from '../components/project-gallery-small'
import ProjectContent from '../components/project-content'
import ProjectContentSmall from '../components/project-content-small'
import sizeMe from 'react-sizeme';



import Layout from "../components/layout"


const Herlizya = (props) => {
  const { width, height } = props.size;

  let CurrentProjectGallery 
  let CurrentProjectContent 
  if (width > 420) {
    CurrentProjectGallery = <ProjectGallery image1='zeitouni-hero-2.jpg' image2='gvash_5.jpg' image3='gvash_6.jpg' logo='gvash-logo.jpg' />
    CurrentProjectContent = <ProjectContent project='gvash' />
  } else {
    CurrentProjectGallery = <ProjectGallerySmall image1='zeitouni-hero-2.jpg' image2='gvash_5.jpg' image3='gvash_6.jpg' logo='gvash-logo.jpg' />
    CurrentProjectContent = <ProjectContentSmall project='gvash' />
  }


  return <Layout>
    <PageHero header='פרויקטים' />
    <ProjectHeader header='אקו רמת הדר החדשה גבעת שמואל' />
    {CurrentProjectGallery}
    {CurrentProjectContent}
  </Layout>
}

export default sizeMe({ monitorWidth: true })(Herlizya)
