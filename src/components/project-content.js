import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import styles from './project-content.module.scss'
import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-red.css';
import './awesome-button.css'
import Fade from 'react-reveal/Fade';
import divider from '../images/title-divider-white.png';


const ProjectContent = ({project}) => {
  let about
  let location
  let sale
  if (project === 'herzliya') {
    about = <div><p>אתם מוזמנים לחוויית מגורים מושלמת ב – ECO הרצליה, קומפלקס מגורים ההולך ומוקם בימים אלה במתחם אלתרמן היוקרתי המתפתח במערב הרצליה הירוקה.
   </p><p>
    בתכנון של ECO הרצליה הושם דגש רב על תחושת מרחב לדיירים. הקומפלקס מעמיד לבחירתכם היצע מגוון של דירות מרווחות ומתוכננות בצורה פונקציונלית, איכותית ומוקפדת, כך שכל אחד מבני המשפחה ירגיש הכי בבית שאפשר.
    </p><p>
    המתחם כולל 3 מגדלי יוקרה בני 9-10 קומות. הקומפלקס היוקרתי מתוכנן תוך שמירה על מרווח גדול בין הבניינים, מה שמעצים את תחושת המרחבים והפרטיות ממנה נהנים הדיירים. הבניינים עצמם מתהדרים בגגות מקושתים, המעניקים למתחם אופי מיוחד והופכים אותו לאייקון אדריכלי מזוהה. 
    כל בניין בפרויקט מציע מגוון דירות: דירות 5-6 חדרים, דירות גן בנות 5-6 חדרים, מיני-פנטהאוזים ופנטהאוזים.
    </p><p>
    הפרויקט תוכנן כחלק מתפיסת המגורים "אקו-קונספט", שמהותה סביבת חיים ירוקה, חשיבה על צרכי המשפחה לאורך שנים ושמירה על איכות הסביבה.</p></div>
    location = <p>הפרוייקט ממוקם במערב הרצליה הירוקה, בין הרחובות: אלתרמן (דרום), ז'בוטינסקי (מערב), והבריגדה היהודית (צפון).

    סמוך למרכז הבינתחומי, במרחק נגיעה מפארק הרצליה, קניון שבעת הכוכבים, קאנטרי קלאב בהרצליה, מתחם הספורטק והיכל אומנויות הבמה, מחכה לכם איכות חיים גבוהה עם שלל אפשרויות פנאי ובילוי במרחק הליכה. בואו ליהנות מכל היתרונות שלECO  הרצליה בסיפור ההצלחה הבא מבית גינדי זיתוני, מחברות הבנייה המובילות, המנוסות והמקצועיות בישראל.</p>

  }


    return <div className={styles.project}>
        <Fade duration={3000}>
          <div className={styles.content}>
            <div className={styles.contact}>
            </div>
            <div className={styles.text} dir="rtl">
              <h1>על הפרויקט</h1>
              {about}
              <h1>המיקום</h1>
              {location}
            </div>
          </div>
        </Fade>
    </div>
};

export default ProjectContent