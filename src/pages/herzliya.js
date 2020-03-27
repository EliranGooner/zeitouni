import React from "react"
import { Link } from "gatsby"
import PageHero from '../components/page-hero'
import ProjectHeader from '../components/project-header'
import ProjectGallery from '../components/project-gallery'
import ProjectContent from '../components/project-content'
import sizeMe from 'react-sizeme';



import Layout from "../components/layout"


const Herlizya = (props) => {
  const { width, height } = props.size;

  let ToRenderChildNavbar 
  if (width > 420) {

  } else {
 
  }


  return <Layout>
    <PageHero header='פרויקטים' />
    <ProjectHeader header='אקו הרצליה' />
    <ProjectGallery image1='zeitouni-hero-1.jpg' image2='zeitouni-hero-2.jpg' image3='zeitouni-hero-1.jpg' logo='gvash-logo.jpg' />
    <ProjectContent project='herzliya' />
  </Layout>
}

export default sizeMe({ monitorWidth: true })(Herlizya)
