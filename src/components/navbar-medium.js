import AniLink from "gatsby-plugin-transition-link/AniLink"
import React, { useState, useEffect } from "react"
import styles from "./navbar-medium.module.scss"
import zeitouniLogo from "../images/logo zeituni_b.png"
import { Icon } from "@iconify/react"
import instagramIcon from "@iconify/icons-cib/instagram"
import facebookIcon from "@iconify/icons-cib/facebook"

const NavbarMedium = ({}) => {
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.scrollY >= window.innerHeight - 10) {
          setScroll(true)
        } else {
          setScroll(false)
        }
      })
    }
  })

  return (
    <div>
      {scroll ? (
        <div className={`${styles.navbar} navbar-black`}>
          <div
            className={styles.logos}
            itemScope
            itemType="https://schema.org/Brand"
          >
            <div>
              <a
                href="https://www.instagram.com/zeitounigroupltd/"
                alt="instagram"
              >
                <Icon icon={instagramIcon} className={styles.social} />
              </a>
              <a
                href="https://www.facebook.com/Zeitouni.Group.ltd.IL/"
                alt="facebook"
              >
                <Icon icon={facebookIcon} className={styles.social} />
              </a>
            </div>
            <AniLink cover direction="right" bg="#808080" to="/">
              <img
                src={zeitouniLogo}
                className={styles.logo}
                alt="לוגו זיתוני"
                itemProp="logo"
              ></img>
            </AniLink>
          </div>
        </div>
      ) : (
        <div className={styles.navbar}>
          <div className={styles.logos}>
            <div>
              <a
                href="https://www.instagram.com/zeitounigroupltd/"
                alt="instagram"
              >
                <Icon icon={instagramIcon} className={styles.social_white} />
              </a>
              <a
                href="https://www.facebook.com/Zeitouni.Group.ltd.IL/"
                alt="facebook"
              >
                <Icon icon={facebookIcon} className={styles.social_white} />
              </a>
            </div>
          </div>
          <div className={styles.menu_white}></div>
        </div>
      )}
    </div>
  )
}

export default NavbarMedium
