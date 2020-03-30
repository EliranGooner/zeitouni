import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, {useState} from "react";
import styles from './projects-container.module.scss';
import Fade from 'react-reveal/Fade';
import Image from "./image";
import sizeMe from 'react-sizeme';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './react-tabs.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './project-card'

const ProjectsContainer = (props) => {
  const { width, height } = props.size;

  let mediumDevice = false
  if (1100 > width) {
    mediumDevice = true
  } 

  
  return <div dir="rtl">
  <Tabs defaultIndex={1} >
    <TabList >
      <Tab className={ mediumDevice ? 'react-tabs__tab_medium' : 'react-tabs__tab'}>פרויקטים מאוכלסים</Tab>
      <Tab className={ mediumDevice ? 'react-tabs__tab_medium' : 'react-tabs__tab'}>פרויקטים בשיווק</Tab>
      <Tab className={ mediumDevice ? 'react-tabs__tab_medium' : 'react-tabs__tab'}>פרויקטים עתידיים</Tab>
    </TabList>
    <TabPanel>
      <Grid container className={styles.bottom} >
        <Grid item className={styles.item} xs={12} sm={4} ml={6}>
          <ProjectCard src='neve_oz_1.jpg' header='אקו נווה עוז פתח תקווה' />
        </Grid>
        <Grid item className={styles.item} xs={12} sm={4} ml={6}>
          <ProjectCard src='eco_ks_2.jpg' header='אקו השכונה הירוקה כפר סבא' path='/kfar-saba/' />
        </Grid>
        <Grid item className={styles.item} xs={12} sm={4} ml={6}>
          <ProjectCard src='hod_hasharon.jpg' header='אקו הוד השרון' />
        </Grid>
        <Grid item className={styles.item} xs={12} sm={4} ml={6}>
          <ProjectCard src='zeitouni-herzliya.jpg' header='אקו כפר גנים פתח תקווה' />
        </Grid>
        <Grid item className={styles.item} xs={12} sm={4} ml={6}>
          <ProjectCard src='pt_city_park.jpg' header='סיטי פארק נווה גן פתח תקווה' />
        </Grid>
        <Grid item className={styles.item} xs={12} sm={4} ml={6}>
          <ProjectCard src='hod_al_hapark.jpg' header='הוד על הפארק הוד השרון' />
        </Grid>
      </Grid>
    </TabPanel>
    <TabPanel>
    <Grid container >
      <Grid item className={styles.item} xs={12} sm={6} ml={6}>
        <ProjectCard src='zeitouni-hero-2.jpg' header=' גבעת שמואל רמת הדר החדשה' path='/givat-shmuel' />
      </Grid>
      <Grid item className={styles.item} xs={12} sm={6} ml={6}>
        <ProjectCard src='zeitouni-hero-1.jpg' header='אקו הרצליה' path='/herzliya'  />
      </Grid>
    </Grid>
    </TabPanel>
    <TabPanel>
    <Grid container >
      <Grid item className={styles.item} xs={12} sm={3} ml={6}>
      </Grid>
      <Grid item className={styles.item} xs={12} sm={6} ml={6}>
        <ProjectCard src='bat-yam_logo.png' header='פארק ים בת-ים' path='/bat-yam' />
      </Grid>
      <Grid item className={styles.item} xs={12} sm={3} ml={6}>
      </Grid>
    </Grid>
    </TabPanel>
  </Tabs>
</div>
};

export default sizeMe({ monitorWidth: true })(ProjectsContainer)