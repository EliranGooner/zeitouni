import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, {useState} from "react";
import styles from './about-avi-div.module.scss';
import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-red.css';
import './awesome-button.css';
import imgAvi from '../images/avi_z_3.jpg';
import Fade from 'react-reveal/Fade';
import Image from './image'

const AboutAviDiv = ({}) => {
    const imgStyle = {
      height: '100%',
      width: '230%',
      objectFit: 'cover',
      margin: '0 10px 0 0'
    }
    return <div className={styles.about}>
      <Fade duration={2000} right>
        <div className={styles.avi}>
          <Image imgName="avi_z_3.jpg" style={imgStyle}/>
          <div className={styles.avi_text}>
            <h1>אבי זיתוני</h1>
            <p>אבי זיתוני, שנולד בבת ים וגדל בכפר סבא, הוא דור שני למשפחת קבלנים. בתחילת שנות ה-80, לאחר שהשתחרר מהצבא, החל אבי זיתוני לעבוד כשכיר אצל היזמים משה ויגאל גינדי. אביו אמנם עבד גם הוא בנדל"ן, אך אבי בחר לצמוח מלמטה וללמוד את יסודות הענף, השיווק והביצוע דרך היזמים הכי וותיקים והמנוסים באותה תקופה. אחרי 5 שנים אצל האחים גינדי הוא פרש לדרך עצמאית ועד היום הוא בנה מעל 2,500 יחידות 
            דיור</p>
            <div className={styles.button_div}>
              <Link to='/avi/'><AwesomeButton type="primary" className='aws-btn'>המשיכו לקרוא</AwesomeButton></Link>
            </div>
          </div>
        </div>
      </Fade>
      
    </div>
};

export default AboutAviDiv