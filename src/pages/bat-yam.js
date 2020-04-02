import React from "react";
import styles from '../components/bat-yam.module.scss';
import PageHero from '../components/page-hero';
import ProjectHeader from '../components/project-header';
import Image from '../components/image';
import SEO from "../components/seo";



import Layout from "../components/layout"


const BatYam = () => {
  
  return <Layout>
    <SEO
    title='פרויקט פארק הים בת ים'
    description='קבוצת זיתוני עומלת רבות כדי לבנות פרויקט איכותי בפארק הים אשר בבת ים. פרטים נוספים בקרוב.'
    />
    <PageHero header='פרויקטים' />
    <ProjectHeader header='פארק ים בת-ים' />
    <div className={styles.head}>
      <div className={styles.logo}>
        <Image imgName='bat-yam_logo.png' />
      </div>
    </div>
    <div className={styles.soon}>
      <h1>...פרטים נוספים בקרוב</h1>
    </div>
  </Layout>
}

export default BatYam
