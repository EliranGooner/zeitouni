import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import styles from './about-div.module.scss'
import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-red.css';
import './awesome-button.css'
import Fade from 'react-reveal/Fade';


const AboutDiv = ({}) => {
    return <div className={styles.about}>
        <Fade>
          <h1>קצת עלינו</h1>
          <div className={styles.text_container}>
            <div className={styles.text}>
              <p>החזון מאחורי פעילות הקבוצה הוא להגשים חלומות עבור זוגות צעירים ומשפרי דיור שחולמים על בית חדש, מודרני ומעוצב באזור יפה ומבוקש. קבוצת זיתוני מתמקדת בבנייה למגורים לקהל ברמה סוציו-אקונומית בינונית עד גבוהה. לשם כך, הקבוצה יוזמת איתור ורכישה של קרקעות באזורים חדשים ומתפתחים, ומטביעה בהם את חותמה בעזרת תכנון מיוחד, מודרני וחדשני ובנייה ענפה ומתקדמת. רמת הבנייה ורמת המפרט הטכני של הדירות הינן גבוהות ביותר, ובכל פרויקט חדש, הרמה וטיב הבנייה עולים ומשודרגים. החזון הזה מודגם היטב בפרויקטים שבונה הקבוצה בהרצליה, בפתח תקווה, בגבעת שמואל, בכפר סבא ובהוד השרון, הנחשבות לאזור מבוקש בקרב קהל רוכשי הדירות.
              אנו, בקבוצת זיתוני, הצבנו לעצמנו מטרה להעניק ללקוחותינו שירות ברמה המקצועית הגבוהה ביותר, לצד יחס אישי חם ואדיב. כחלק מתפיסת העולם של החברה, כל פרויקט מלווה באופן אישי על ידי עובדי החברה, מתחילת תהליך הרכישה ועד לרגע הכניסה לדירה החדשה.             
              </p>
            </div>
          </div>
          <div className={styles.button_div}>
          <Link to='/about/'><AwesomeButton type="primary" className='aws-btn'>המשיכו לקרוא</AwesomeButton></Link>
          </div>
        </Fade>
    </div>
};

export default AboutDiv