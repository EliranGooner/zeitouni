import React from "react"
import { Link } from "gatsby"
import PageHero from '../components/page-hero'
import ProjectHeader from '../components/project-header'
import ProjectGallery from '../components/project-gallery'
import ProjectGallerySmall from '../components/project-gallery-small'
import ProjectContent from '../components/project-content'
import ProjectContentSmall from '../components/project-content-small'
import sizeMe from 'react-sizeme';



import Layout from "../components/layout"


const KfarSaba = (props) => {
  const { width, height } = props.size;

  let CurrentProjectGallery 
  let CurrentProjectContent 
  if (width > 420) {
    CurrentProjectGallery = <ProjectGallery image1='zeitouni-hero-1.jpg' image2='zeitouni-hero-2.jpg' image3='zeitouni-hero-1.jpg' logo='gvash-logo.jpg' />
    CurrentProjectContent = <ProjectContent project='kfs' />
  } else {
    CurrentProjectGallery = <ProjectGallerySmall image1='zeitouni-hero-1.jpg' image2='zeitouni-hero-2.jpg' image3='zeitouni-hero-1.jpg' logo='gvash-logo.jpg' />
    CurrentProjectContent = <ProjectContentSmall project='kfs' />

  }


  return <Layout>
    <PageHero header='פרויקטים' />
    <ProjectHeader header='אקו השכונה הירוקה כפר סבא' />
    {CurrentProjectGallery}
    {CurrentProjectContent}
  </Layout>
}

export default sizeMe({ monitorWidth: true })(KfarSaba)
