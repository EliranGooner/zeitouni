import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import styles from './about-div-small.module.scss'
import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-red.css';
import './awesome-button.css'
import Fade from 'react-reveal/Fade';
import divider from '../images/title-divider-white.png';



const AboutDivSmall = ({}) => {
    return <div className={styles.about}>
        <Fade left duration={3000}>
          <div className={styles.content}>
            <h1>קצת עלינו</h1>
            <img src={divider}></img>
            <div className={styles.text_container}>
              <div className={styles.text}>
                <p>קבוצת זיתוני הינה קבוצת חברות בנייה המתמחה בייזום, בתכנון, בבנייה ובשיווק למגורים באזור השרון ובגוש דן. הקבוצה נוסדה בשנת 1997, ופועלת בשיתוף פעולה עם חברת משה ויגאל גינדי. הקבוצה מנוהלות על ידי אבי זיתוני, חבר הנהלת ארגון הקבלנים והבונים בתל-אביב יפו, דור שני למשפחת קבלנים ובעל ניסיון רב בתחום הבנייה למגורים.</p>
              </div>
            </div>
            <div className={styles.button_div}>
              <Link to='/about/'><AwesomeButton type="primary" className='aws-btn'>המשיכו לקרוא</AwesomeButton></Link>
            </div>
          </div>
        </Fade>
    </div>
};

export default AboutDivSmall