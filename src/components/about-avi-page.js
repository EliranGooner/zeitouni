import React from "react";
import styles from './about-avi-page.module.scss';
import Fade from 'react-reveal/Fade';
import Image from './image';
import sizeMe from 'react-sizeme';


const AboutAviPage = (props) => {
  const { width } = props.size;

  let deviceSmall = false
  if (500 > width) {
    deviceSmall = true
  } 

    return <div className={deviceSmall ? styles.about_small : styles.about}>
        <Fade duration={3000}>
          <div className={deviceSmall ? styles.content_small : styles.content}>
            {deviceSmall ? null : <Image imgName='avi_z_3.jpg' alt='אבי זיתוני' className={styles.office} />}
            <div className={styles.text_container}>
              <div className={styles.text}>
                <h1>חזון</h1>
                <p>אבי זיתוני, שנולד בבת ים וגדל בכפר סבא, הוא דור שני למשפחת קבלנים. בתחילת שנות ה-80, לאחר שהשתחרר מהצבא, החל אבי זיתוני לעבוד כשכיר אצל היזמים משה ויגאל גינדי. אביו אמנם עבד גם הוא בנדל"ן, אך אבי בחר לצמוח מלמטה וללמוד את יסודות הענף, השיווק והביצוע דרך היזמים הכי וותיקים והמנוסים באותה תקופה. אחרי 5 שנים אצל האחים גינדי הוא פרש לדרך עצמאית ועד היום הוא בנה מעל 2,500 יחידות דיור. 
                </p>
                <p>היזם, אבי זיתוני הוא הראשון שקנה קרקעות ושזיהה את הפוטנציאל האדיר שטמון בשטחה המערבי של כפר סבא שהיום מוכרת לכולם בשם "השכונה הירוקה". המיקום של השכונה עם המאפיינים של הבנייה הירוקה שאני הובלתי הם הדבר הבא בתחום הנדל"ן. קבוצת זיתוני בשיתוף עם משה ויגאל גינדי בנו בשכונה הירוקה כ-520 יחידות דיור ב-20 בניינים מגוונים. השכונה הפכה להיות אחת השכונות הכי מבוקשות באזור. 
                </p>
                <p>אבי זיתוני: "כל הצלחה מתחילה בחלום, לחלום אין גבולות. מאז שאני זוכר את עצמי חלמתי להיות יזם נדל"ן. ההצלחה שלי לא באה במזל ולא בקלות, אלא התממשה בזכות העקשנות וההתמדה שלי בלי קיצורי דרך, רק עבודה קשה ואמונה גדולה. החזון שלי הוא איתור מתחמים חדשים לבניית שכונת מגורים נוחה ואופטימלית והפיכתם לאזורי ביקוש."
                </p>
              </div>
            </div>
          </div>
        </Fade>
    </div>
};

export default sizeMe({ monitorWidth: true })(AboutAviPage)