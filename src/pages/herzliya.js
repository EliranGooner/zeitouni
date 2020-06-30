import React from "react"
import PageHero from "../components/page-hero"
import ProjectHeader from "../components/project-header"
import ProjectGallery from "../components/project-gallery"
import ProjectGallerySmall from "../components/project-gallery-small"
import ProjectContent from "../components/project-content"
import ProjectContentSmall from "../components/project-content-small"
import sizeMe from "react-sizeme"
import SEO from "../components/seo"

import Layout from "../components/layout"

const Herlizya = props => {
  const { width } = props.size

  let CurrentProjectGallery
  let CurrentProjectContent
  if (width > 420) {
    CurrentProjectGallery = (
      <ProjectGallery
        image1="zeitouni-hero-1.jpg"
        image2="herzliya_2.jpg"
        image3="herzliya_3.jpg"
        image4="herzliya-new-resize.jpg"
        image5="herzliya-new-2-resize.jpg"
        image6="herzliya-new-3-resize.jpg"
        logo="herzliya"
      />
    )
    CurrentProjectContent = <ProjectContent project="herzliya" />
  } else {
    CurrentProjectGallery = (
      <ProjectGallerySmall
        image1="zeitouni-hero-1.jpg"
        image2="herzliya_2.jpg"
        image3="herzliya_3.jpg"
        image4="herzliya-new-resize.jpg"
        image5="herzliya-new-2-resize.jpg"
        image6="herzliya-new-3-resize.jpg"
        logo="herzliya"
      />
    )
    CurrentProjectContent = <ProjectContentSmall project="herzliya" />
  }

  return (
    <Layout>
      <SEO
        title="אקו הרצלייה"
        description="אתם מוזמנים לחוויית מגורים מושלמת ב – ECO הרצליה, קומפלקס מגורים ההולך ומוקם בימים אלה במתחם אלתרמן היוקרתי המתפתח במערב הרצליה הירוקה."
      />
      <PageHero header="פרויקטים" />
      <ProjectHeader header="אקו הרצליה" />
      {CurrentProjectGallery}
      {CurrentProjectContent}
    </Layout>
  )
}

export default sizeMe({ monitorWidth: true })(Herlizya)
