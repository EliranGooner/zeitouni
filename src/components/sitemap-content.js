import { Link } from "gatsby"
import React from "react"
import styles from './sitemap-content.module.scss'


const SitemapContent = ({}) => {
  return <div className={styles.sitemap}>
      <h1>מפת האתר</h1>
      <ul>
      <li><Link to='/'>דף בית</Link></li>
      <li><Link to='/projects/'>פרויקטים</Link></li>
      <li><Link to='/about/'>עלינו</Link></li>
      <li><Link to='/avi/'>אבי זיתוני</Link></li>
      <li><Link to='/articles/'>מהתקשורת</Link></li>
      <li><Link to='/contact/'>צרו קשר</Link></li>
      <li><Link to='/accessibility/'>הצהרת נגישות</Link></li>
      <li><Link to='/sitemap/'>מפת האתר</Link></li>
      </ul>
  </div>
};

export default SitemapContent