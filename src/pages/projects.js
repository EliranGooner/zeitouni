import React from "react";
import PageHero from '../components/page-hero';
import ProjectsContainer from '../components/projects-container';
import ProjectsContainerSmall from '../components/projects-container-small';
import sizeMe from 'react-sizeme';
import SEO from "../components/seo";
import Layout from "../components/layout";


const Projects = (props) => {
  const { width } = props.size;

  let ToRenderChildNavbar 
  if (width > 420) {
    ToRenderChildNavbar = ProjectsContainer
  } else {
    ToRenderChildNavbar = ProjectsContainerSmall
  }


  return <Layout>
    <SEO title="פרויקטים" 
    description='קבוצת בנתה, בונה ותבנה פרויקטים המיועדים לחווית מגורים מושלמת ללא התפשרות. הקבוצה בונה ברחבי גוש דן ובשרון וממשיכה לגדול.'
    />
    <PageHero header='פרויקטים' />
    <ToRenderChildNavbar />
  </Layout>
}

export default sizeMe({ monitorWidth: true })(Projects)
