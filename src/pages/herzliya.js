import React from "react";
import PageHero from '../components/page-hero';
import ProjectHeader from '../components/project-header';
import ProjectGallery from '../components/project-gallery';
import ProjectGallerySmall from '../components/project-gallery-small';
import ProjectContent from '../components/project-content';
import ProjectContentSmall from '../components/project-content-small';
import sizeMe from 'react-sizeme';
import SEO from "../components/seo";




import Layout from "../components/layout"


const Herlizya = (props) => {
  const { width } = props.size;

  let CurrentProjectGallery 
  let CurrentProjectContent 
  if (width > 420) {
    CurrentProjectGallery = <ProjectGallery image1='zeitouni-hero-1.jpg' image2='herzliya_2.jpg' image3='herzliya_3.jpg' logo='gvash-logo.jpg' />
    CurrentProjectContent = <ProjectContent project='herzliya' />
  } else {
    CurrentProjectGallery = <ProjectGallerySmall image1='zeitouni-hero-2.jpg' image2='herzliya_2.jpg' image3='herzliya_3.jpg.jpg' logo='gvash-logo.jpg' />
    CurrentProjectContent = <ProjectContentSmall project='herzliya' />

  }


  return <Layout>
    <SEO title="אקו הרצלייה" 
    description='אתם מוזמנים לחוויית מגורים מושלמת ב – ECO הרצליה, קומפלקס מגורים ההולך ומוקם בימים אלה במתחם אלתרמן היוקרתי המתפתח במערב הרצליה הירוקה.'
    />
    <PageHero header='פרויקטים' />
    <ProjectHeader header='אקו הרצליה' />
    {CurrentProjectGallery}
    {CurrentProjectContent}
  </Layout>
}

export default sizeMe({ monitorWidth: true })(Herlizya)
