import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import styles from './project-content.module.scss'
import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-red.css';
import './awesome-button.css'
import ElementFade from 'react-reveal/Fade';
import divider from '../images/title-divider-white.png';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useForm } from 'react-hook-form'



const ProjectContent = ({project}) => {
  const [open, setOpen] = useState(false);
  const { register, errors, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <ElementFade duration={3000}>
          <div className={styles.content}>
            <div className={styles.contact}>
              <div className={styles.box}>
                <div className={styles.header}>
                  <h1>יצירת קשר</h1>
                  </div>
                  <p>למען קבלת פרטים נוספים וקביעת פגישה נא השאירו פרטים</p>
                  <form action="https://www.flexyform.com/f/6dd8a2a22e656549c9cdd8b85074db127e86f10f" method="post" onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.form}>
                      <div className={styles.form_field}>
                        <input type="text" name="fullName" placeholder='שם מלא' className={styles.input_row_one} ref={register({ required: true, maxLength: 30, pattern: /^[\u0590-\u05FF]+$/ })}/>
                        <div className={styles.error}>
                          {errors.fullName && 'שם לא תקין'}
                        </div>
                      </div>
                      <div className={styles.form_field}>
                        <input type="text" name="phone" placeholder="טלפון" className={styles.input_row_one} ref={register({ required: true, pattern: /^\d{10}$/ })}/>
                        <div className={styles.error}>
                          {errors.phone && 'מספר טלפון לא תקין'}
                        </div>
                      </div>
                      <div className={styles.form_field}>
                        <input type="text" name="email" placeholder='דוא״ל' className={styles.input_row_one} ref={register({ required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}/>
                        <div className={styles.error}>
                          {errors.email && 'דוא״ל לא תקין'}
                        </div>
                      </div>
                      <div className={styles.submit}>
                        <button type="submit" onClick={!errors ? handleOpen : ''}><AwesomeButton type="primary" className='aws-btn-contact' >שלח</AwesomeButton></button>
                      </div>
                     </div>
                  </form>
              </div>
            </div>
            <div className={styles.text}>
              <h1>על הפרויקט</h1>
              {about}
              <h1>המיקום</h1>
              {location}
            </div>
          </div>
        </ElementFade>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={styles.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={styles.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
    </div>
};

export default ProjectContent