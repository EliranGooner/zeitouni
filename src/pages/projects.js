import React from "react"
import { Link } from "gatsby"
import PageHero from '../components/page-hero'
import ProjectsContainer from '../components/projects-container'
import ProjectsContainerSmall from '../components/projects-container-small'
import sizeMe from 'react-sizeme';



import Layout from "../components/layout"


const Projects = (props) => {
  const { width, height } = props.size;

  let ToRenderChildNavbar 
  if (width > 420) {
    ToRenderChildNavbar = ProjectsContainer
  } else {
    ToRenderChildNavbar = ProjectsContainerSmall
  }


  return <Layout>
    <PageHero header='פרויקטים' />
    <ToRenderChildNavbar />
  </Layout>
}

export default sizeMe({ monitorWidth: true })(Projects)
