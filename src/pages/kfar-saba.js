import React from "react"
import { Link } from "gatsby"
import PageHero from '../components/page-hero'
import ProjectHeader from '../components/project-header'
import ProjectGalleryKfs from '../components/project-gallery-kfs'
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
    CurrentProjectGallery = <ProjectGalleryKfs image1='eco_ks_1.jpg' image2='eco_ks_2.jpg' image3='eco_ks_plat_1.jpg' logo='gvash-logo.jpg' />
    CurrentProjectContent = <ProjectContent project='kfs' />
  } else {
    CurrentProjectGallery = <ProjectGallerySmall image1='eco_ks_1.jpg' image2='eco_ks_2.jpg' image3='eco_ks_plat_1.jpg' logo='gvash-logo.jpg' />
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
