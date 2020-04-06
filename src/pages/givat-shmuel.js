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
    CurrentProjectGallery = <ProjectGallery image1='zeitouni-hero-2.jpg' image2='gvash_5.jpg' image3='gvash_6.jpg' logo='gvash' />
    CurrentProjectContent = <ProjectContent project='gvash' />
  } else {
    CurrentProjectGallery = <ProjectGallerySmall image1='zeitouni-hero-2.jpg' image2='gvash_5.jpg' image3='gvash_6.jpg' logo='gvash' />
    CurrentProjectContent = <ProjectContentSmall project='gvash' />
  }


  return <Layout>
    <SEO title="אקו רמת הדר החדשה גבעת שמואל" 
    description='"אקו רמת הדר החדשה" בגבעת שמואל, מזמין אתכם להגשים את החלום ולהתחיל ליהנות מכל הטוב ממגורים בפרוייקט פרימיום, הנבנה בסטנדרט הגבוה ביותר, באיכות בלתי מתפשרת ועם תכנון מדוקדק עד לפרט האחרון.'
    />
    <PageHero header='פרויקטים' />
    <ProjectHeader header='אקו רמת הדר החדשה גבעת שמואל' />
    {CurrentProjectGallery}
    {CurrentProjectContent}
  </Layout>
}

export default sizeMe({ monitorWidth: true })(Herlizya)
