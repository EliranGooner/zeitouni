import { Link } from "gatsby"
import React, {useState} from "react"
import styles from './project-content-small.module.scss'
import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-red.css';
import './awesome-button.css'
import ElementFade from 'react-reveal/Fade';
import { useForm } from 'react-hook-form'
import GoogleMapReact from "google-map-react";
import MapMarker from './map-marker';
import axios from 'axios';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import sketch from '../downloads/sketch.pdf';



const ProjectContentSmall = ({project}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { register, errors, handleSubmit } = useForm()
  let key;
  project === 'gvash' ? key = process.env.GS_KEY : key = process.env.GETFORM_KEY;
  const onSubmit = (data) => {
    console.log(data)
    axios({
      method: "post",
      url: `${key}`,
      data: data
    });
    handleShow();
  };

  let center = { 
    lat: 32.177185,
    lng: 34.832118
  }

  let about
  let location
  let building
  let flat
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

    building = <div className={styles.list}>
    <p>בנייה לפי תקן 5281 בנייה ירוקה.</p>
    <p>פיתוח ועיצוב המגרש עם גינון וצמחיה ע"י אדריכל נוף.</p>
    <p>חיפוי ועיצוב הבניין באבן טבעית.</p>
    <p>לובי כניסה יוקרתי ומעוצב ע"י אדריכל פנים.</p>
    <p>מערכת טלוויזיה צבעונית במעגל סגור בכניסה לבניין.</p>
    <p>לובי קומתי מעוצב.</p>
    <p>שתי מעליות מפוארות.</p>
    <p>שער חשמלי בכניסה לחניון.</p>
    <p>שתי חניות בחניון תת קרקעי לכל דירה.</p>
    <p>חדר אופניים.</p>
    <p>מחסן פרטי לכל דירה במרתף.</p>
    <p>מועדון דיירים.</p>
    </div>

    flat = <div className={styles.list}>
    <p>ריצוף גרניט פורצלן יוקרתי  60/60 בכל הדירה (מלבד חדרים רטובים ומרפסות )במספר גוונים לבחירה.</p>
    <p>ריצוף וחיפוי חדרי רחצה בקרמיקה יוקרתית במספר גוונים לבחירה.</p>
    <p>דלת בטחון בכניסה מעוצבת.</p>
    <p>דלתות פנים מסוג פנדור או שווה ערך בצבע לבן וצבעים נוספים.</p>
    <p>תריסי גלילה חשמליים בכל הדירה (למעט בממ"ד).</p>
    <p>זיגוג מסוג בידודית בכל החדרים (למעט בממ"ד).</p>
    <p>ברזי רחצה יוקרתיים של חברת GROHE  או שווה ערך.</p>
    <p>ברז מטבח עם מוט נשלף.</p>
    <p>ברז גן במרפסת דיור / גינה.</p>
    <p>נקודת גז במרפסת דיור / גינה.</p>
    <p>אמבטיה אקרילית.</p>
    <p>אסלות תלויות עם מיכלי הדחה סמויים בכל חדרי האמבטיה והשירותים.</p>
    <p>ארון אמבטיה משולב עם כיור בחדר רחצה ואמבטיה כללית.</p>
    <p>כיור מטבח ייוקרתי בהתקנה שטוחה.</p>
    <p>ארונות מטבח יוקרתיים כולל יח' BUILT IN.</p>
    <p>משטח שיש יוקרתי מאבן קיסר.</p>
    <p>מיזוג אוויר דירתי מסוג אינוורטר.</p>
    <p>חשמל תלת פאזי 3X25</p>
    <p>אביזרי קצה חשמלי תוצרת "גוויס" או "בטוציני".</p>
    <p>הכנה למערכת קולנוע ביתית.</p>
    <p>הכנה לשואב אבק דירתי.</p>
    </div>
  } else if (project === 'gvash') {
    about = <div>
    <p>"אקו רמת הדר החדשה" בגבעת שמואל, מזמין אתכם להגשים את החלום ולהתחיל ליהנות מכל הטוב ממגורים בפרוייקט פרימיום, הנבנה בסטנדרט הגבוה ביותר, באיכות בלתי מתפשרת ועם תכנון מדוקדק עד לפרט האחרון.</p>
    <p>לבחירתכם 2 מגדלים מרשימים בני 21 קומות, עם תמהיל מגוון הכולל דירות רחבות ידיים בנות 3-6 חדרים - כל דירה נהנית מגימור בסטנדרט הגבוה ביותר, מפרט עשיר ומפנק ותכנון מוקפד. בפרוייקט מחכים לכם גם 6 פנטהאוזים מרהיבים ורחבי ידיים שתוכננו תחת הקונספט "השמיים הם הגבול" הכוללים מרפסות ענקיות.
    </p>
    <p>בכל פרט בבניין, מהלובי המעוצב, מועדון הדיירים המרווח, הפיתוח הסביבתי המרהיב ועד העיצוב החיצוני המשדר אלגנטיות ועדכניות, הושקעו מחשבה ותשומת לב קפדניות. התוצאה - חוויית מגורים יוצאת דופן מסוגה, שתזכיר לכם בכל פעם מחדש שעשיתם את הבחירה הנכונה.
    </p>
    </div>
    location = <div>
    <p>רמת הדר החדשה ממוקמת באופן אופטימלי המאפשר לכם ליהנות
    מכל מה שחשוב לכם ולמשפחה שלכם בקירבת מקום.
     
    מפארק רמון רחב הידיים וקניון הגבעה הנמצאים ממש מעבר
    לכביש, הולמס פלייס גבעת שמואל במרחק נסיעת אופניים, קומפלקס
    האמנות והתרבות ע"ש אריאל שרון, קאנטרי נווה עוז, הקניון הגדול
    בפ"ת, קניון קרית אונו, מוסדות רפואיים ואקדמיים - בתי החולים תל
    השומר ובילינסון ואוניברסיטת בר-אילן, בתי ספר מצויינים,
    מוסדות חינוך ושירותי קהילה.</p>
    <p>מרכזיותה של השכונה מאפשרת לכם למקסם את הפנאי שלכם
    וליהנות מזמן איכות עשיר ומגוון עם עצמכם, עם המשפחה ועם החברים.
    
    הסמיכות לצירי התנועה המרכזיים - כביש 471, כבישים 4 ו-6 וציר
    ז'בוטינסקי בו נבנית הרכבת הקלה, מעניקה לכם נגישות
    מקסימלית לכל אזורי ההייטק ומרכזי התעסוקה במרכז ובשרון,
    ולכל מוקדי העניין של מרכז הארץ. בין אם אתם בדרך לעבודה,
    להופעה, לקניות, טיול או סתם סידורים – לכל מקום תגיעו בקלות,
    בנוחות ובמהירות.</p>
    </div>

    building = <div className={styles.list}>
    <p>תקן בניה ירוקה</p>
    <p>לובי כניסה מעוצב</p>
    <p>4 מעליות מהירות</p>
    <p>חיפוי חיצוני קשיח</p>
    <p>פיר אשפה</p>
    <p>2 קומות חניון תת קרקעי</p>
    <p>מועדון דיירים</p>
    <p>פיתוח סביבתי מושקע וקפדני </p>
    </div>

    flat = <div className={styles.list}>
    <p>ריצוף גרניט פורצלן איכותי בגודל 60*60 בכל הדירה (למעט במרפסות וחדרי רחצה) במספר גוונים לבחירה</p>
    <p>תריסי גלילה חשמליים בכל הדירה (למעט בממ"ד וחדרי רחצה)</p>
    <p>זיגוג כפול בכל חלונות הדירה</p>
    <p>מרפסת שמש עם מעקה זכוכית ואלומיניום</p>
    <p>דלתות פנים – במגוון צבעים כולל לבן</p>
    <p>ארונות מטבח איכותיים כולל יח' Build-In</p>
    <p>במטבח משטח עבודה מסוג אבן קיסר</p>
    <p>כיור בהתקנה שטוחה</p>
    <p>ברז פרח נשלף במטבח</p>
    <p>ארון אמבטיה בחדר רחצה הורים ובאמבטיה כללית</p>
    <p>אסלות תלויות עם מיכל הדחה סמוי</p>
    <p>ריצוף וחיפוי חדרי רחצה במס' גוונים לבחירה</p>
    <p> אינטרקום TV עם מסך צבעוני במעגל סגור + אינטרקום שמע בחדר הורים</p>
    <p>חיבור חשמל תלת פאזי</p>
    <p>מפסק מחליף בחדר הורים</p>
    <p>נק' טלפון ו-TV בכל חדר</p>
    <p>הכנה למערכת קולנוע ביתית</p>
    <p>הכנה למיזוג אוויר דירתי מיני מרכזי</p>
    <p>דוד חשמל לכל הדירות .</p>
    </div>
  } else if (project === 'kfs') {
    about = <div>
    <p>אקו כפר סבא הינו מתחם מגורים יוקרתי בלב השכונה ירוקה, הראשונה מסוגה בישראל. הקונספט הוא יצירת סביבת מגורים נקייה המורכבת מרחובות ירוקים, ללא כבישים פנימיים, שיאפשרו לתושבים ולילדיהם להגיע בבטחה לגינות הציבוריות הרבות ולפארקים ויצמצמו פלאים את הרעשים הסביבתיים (הסדרת התנועה בשולי השכונה בלבד, עם מעברים ייחודים לחניות תת קרקעיות בבתים).</p>
    <p>מתחם המגורים מבית זיתוני&גינדי כולל כ-500 יחידות דיוור בסטנדרט גבוה ובמפרט עשיר ויוקרתי, תוך השמת דגש רב על שימוש בחומרי בניה ידידותיים לסביבה, כאשר המתחם עצמו משתלב בצורה הומוגנית בשכונה הירוקה. </p>
    <p>הפרויקט תוכנן ע"י כנען שנהב, משרד אדריכלים מוביל המתמחה בתכנון דירות יוקרה איכותיות, תוך הקפדה על מרפסות גדולות והקניית יעילות ושימושיות מרביים.</p>
    </div>
    location = <div><p>השכונה הירוקה בכפר סבא ממוקמת בלב השרון הירוק, בסמיכות לצומת רעננה צפון, מול אזור התעשייה ומתחם חברות ההיי-טק. מחלף שמינייה שהוקם במקום מאפשר התחברות ישירה מהשכונה לכביש 4. חווית המגורים מעניקה הרגשה של מושב ירוק באמצע העיר.</p></div>
  }


    return <div className={styles.project}>
        <ElementFade duration={2000}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h1>על הפרויקט</h1>
              {about}
              <h1>המיקום</h1>
              {location}
              {project === 'gvash' ? <a href={sketch} download><strong>לחץ להורדת תוכניות הפרויקט</strong></a> : null }
              {project === 'kfs' ? null 
              :
              <div>
              <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={styles.summary}
              >
                <h1>מפרט הבניין</h1>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails classes={styles.details}>
                {building}
              </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                className={styles.summary}
              >
                <h1>מפרט הדירה</h1>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails classes={styles.details} >
                {flat}
              </ExpansionPanelDetails>
              </ExpansionPanel>
              </div>
            }
             
            </div>
            <div className={styles.contact}>
              <div className={styles.box}>
                <div className={styles.header}>
                  <h1>יצירת קשר</h1>
                  </div>
                  <p>למען קבלת פרטים נוספים וקביעת פגישה נא השאירו פרטים</p>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.form}>
                      <div className={styles.form_field}>
                        <input type="text" name="fullName" placeholder='שם מלא' className={styles.input_row_one} ref={register({ required: true, maxLength: 30, pattern: /^[\u0590-\u05FF ,.'-]+$/ })}/>
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
                        <button type="submit" ><AwesomeButton type="primary" className='aws-btn-contact' >שלח</AwesomeButton></button>
                      </div>
                     </div>
                  </form>
                  </div>
                  {project === 'gvash' ? 
                  <div className={styles.sales}>
                  <p><strong>:משרד מכירות</strong></p>
                  <p>יצחק שמיר 12, גבעת שמואל
                  </p>
                  <p>salesgs@eco-group.co.il</p>
                  <p>*2123</p>
                  </div>
                  : 
                  null
                  }
                  
            </div>
          </div>
          <div className={styles.all}>
            <Link to='/projects/'><AwesomeButton type="primary" className='aws-btn'>לכל הפרויקטים</AwesomeButton></Link>
          </div>
        </ElementFade>
        <div className={styles.map}>
          <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.GOOGLE_MAPS_KEY}` }}
          defaultCenter={center}
          defaultZoom={17}
          >
            <MapMarker 
            lat={center.lat}
            lng={center.lng}
            src={'logo zeituni_b.png'}
            />
          </GoogleMapReact>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title bsPrefix={styles.modal}>!תודה רבה</Modal.Title>
        </Modal.Header>
        <Modal.Body bsPrefix={styles.modal_body}>פרטייך נשלחו בהצלחה, ניצור קשר בהקדם</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            סגור
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
};

export default ProjectContentSmall

