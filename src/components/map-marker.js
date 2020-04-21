import React from "react"
import styles from "./map-marker.module.scss"
import logoHerzliya from "../images/herzliya_logo.png"
import logoGvash from "../images/gvash_logo.png"
import logoKfs from "../images/eco_kfarsaba 2.jpg"

const MapMarker = ({ src }) => {
  let logo
  if (src === "gvash") {
    logo = logoGvash
  } else if (src === "herzliya") {
    logo = logoHerzliya
  } else {
    logo = logoKfs
  }

  return (
    <div className={styles.img_div}>
      <img src={logo} className={styles.img} alt="לוגו הפרויקט" />
    </div>
  )
}

export default MapMarker
