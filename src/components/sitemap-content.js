import AniLink from "gatsby-plugin-transition-link/AniLink"

import React from "react"
import styles from "./sitemap-content.module.scss"

const SitemapContent = () => {
  return (
    <div className={styles.sitemap}>
      <h1>מפת האתר</h1>
      <ul>
        <li>
          <AniLink cover direction="right" bg="#808080" to="/">
            דף בית
          </AniLink>
        </li>
        <li>
          <AniLink cover direction="right" bg="#808080" to="/projects/">
            פרויקטים
          </AniLink>
        </li>
        <li>
          <AniLink cover direction="right" bg="#808080" to="/about/">
            עלינו
          </AniLink>
        </li>
        <li>
          <AniLink cover direction="right" bg="#808080" to="/avi/">
            אבי זיתוני
          </AniLink>
        </li>
        <li>
          <AniLink cover direction="right" bg="#808080" to="/articles/">
            מהתקשורת
          </AniLink>
        </li>
        <li>
          <AniLink cover direction="right" bg="#808080" to="/contact/">
            צרו קשר
          </AniLink>
        </li>
        <li>
          <AniLink cover direction="right" bg="#808080" to="/accessibility/">
            הצהרת נגישות
          </AniLink>
        </li>
        <li>
          <AniLink cover direction="right" bg="#808080" to="/sitemap/">
            מפת האתר
          </AniLink>
        </li>
      </ul>
    </div>
  )
}

export default SitemapContent
