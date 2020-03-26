import React from "react"
import { Link } from "gatsby"
import PageHero from '../components/page-hero'
import ProjectsContainer from '../components/projects-container'


import Layout from "../components/layout"


const Projects = () => (
  <Layout>
    <PageHero header='פרויקטים' />
    <ProjectsContainer />
  </Layout>
)

export default Projects
