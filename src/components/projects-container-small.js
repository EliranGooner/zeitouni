import React from "react"
import styles from "./projects-container-small.module.scss"
import Grid from "@material-ui/core/Grid"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ProjectCard from "./project-card"

const ProjectsContainerSmall = () => {
  return (
    <div
      className={styles.panel}
      itemScope
      itemType="https://schema.org/CollectionPage"
    >
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={styles.summary}
        >
          <h1>פרויקטים מאוכלסים</h1>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <ProjectCard
                src="zeitouni-home-1.jpg"
                header="אקו הרצליה"
                path="/herzliya"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ProjectCard
                src="eco_ks_2.jpg"
                header="אקו השכונה הירוקה כפר סבא"
                path="/kfar-saba/"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ProjectCard
                src="neve_oz_1.jpg"
                header="אקו נווה עוז פתח תקווה"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ProjectCard src="hod_hasharon.jpg" header="אקו הוד השרון" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ProjectCard
                src="kfar_ganim.jpg"
                header="אקו כפר גנים פתח תקווה"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ProjectCard
                src="pt_city_park.jpg"
                header="סיטי פארק נווה גן פתח תקווה"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ProjectCard
                src="hod_al_hapark.jpg"
                header="הוד על הפארק הוד השרון"
              />
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={styles.summary}
        >
          <h1>פרויקטים בשיווק</h1>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={3}>
            <Grid item className={styles.item} xs={12} sm={4}>
              <ProjectCard
                src="zeitouni-home-2.jpg"
                header=" גבעת שמואל רמת הדר החדשה"
                path="/givat-shmuel"
              />
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          className={styles.summary}
        >
          <h1>פרויקטים עתידיים</h1>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={3}>
            <Grid item className={styles.item} xs={12} sm={4}>
              <ProjectCard
                src="bat-yam_logo.png"
                header="פארק ים בת-ים"
                path="bat-yam/"
              />
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

export default ProjectsContainerSmall
