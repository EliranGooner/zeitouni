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

const ProjectsContainer = () => {
  
  return <div dir="rtl">
  <Tabs defaultIndex={1} >
    <TabList >
      <Tab>פרויקטים מאוכלסים</Tab>
      <Tab>פרויקטים בשיווק</Tab>
      <Tab>פרויקטים עתידיים</Tab>
    </TabList>
    <TabPanel>
      <Grid container >
        <Grid item className={styles.item} xs={12} sm={4} ml={6}>
          <ProjectCard src='zeitouni-herzliya.jpg' header=' גבעת שמואל רמת הדר החדשה' path='/' />
        </Grid>
        <Grid item className={styles.item} xs={12} sm={4} ml={6}>
          <ProjectCard src='zeitouni-herzliya.jpg' header='אקו הרצליה' path='/'  />
        </Grid>
        <Grid item className={styles.item} xs={12} sm={4} ml={6}>
          <ProjectCard src='zeitouni-herzliya.jpg' header='אקו הרצליה' path='/' />
        </Grid>
        <Grid item className={styles.item} xs={12} sm={4} ml={6}>
          <ProjectCard src='zeitouni-herzliya.jpg' header='אקו הרצליה' path='/' />
        </Grid>
        <Grid item className={styles.item} xs={12} sm={4} ml={6}>
          <ProjectCard src='zeitouni-herzliya.jpg' header='אקו הרצליה' path='/' />
        </Grid>
        <Grid item className={styles.item} xs={12} sm={4} ml={6}>
          <ProjectCard src='zeitouni-herzliya.jpg' header='אקו הרצליה' path='/' />
        </Grid>
      </Grid>
    </TabPanel>
    <TabPanel>
      <p>
      לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.
      </p>
      <p>
        Source:{' '}
        <a href="https://en.wikipedia.org/wiki/" target="_blank">
          Wikipedia
        </a>
      </p>
    </TabPanel>
    <TabPanel>
      <p>
      לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.
      לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.
      לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.
      </p>
      <p>
        Source:{' '}
        <a href="https://en.wikipedia.org/wiki/" target="_blank">
          Wikipedia
        </a>
      </p>
    </TabPanel>
    <TabPanel>
      <h4>תת כותרת</h4>
      <p>
      לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.
      לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.
      </p>
      <p>
        Source:{' '}
        <a href="https://en.wikipedia.org/wiki/" target="_blank">
          Wikipedia
        </a>
      </p>
    </TabPanel>
  </Tabs>
</div>
};

export default ProjectsContainer
