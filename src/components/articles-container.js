import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, {useState} from "react";
import styles from './articles-container.module.scss';
import Fade from 'react-reveal/Fade';
import sizeMe from 'react-sizeme';
import Grid from '@material-ui/core/Grid';
import ArticleCard from './article-card'
import Articles from "../pages/articles";

const ArticlesContainer = (props) => {
  const { width, height } = props.size;

  let mediumDevice = false
  if (1100 > width) {
    mediumDevice = true
  } 

  
  return <div dir="rtl">
    <Grid container className={styles.container} spacing={4} >
      <Grid item className={styles.item} xs={12} sm={3} ml={6}>
      <ArticleCard header='אבי זיתוני: "היום מורידים מינונים. לא קופצים מעל הפופיק"' preview='היזם אבי זיתוני מספר על השת"פ הארוך עם האחים גינדי, על החיבה לעיסקאות קומבינציה ועל ההתמקדות רק במעגל השני של תל אביב' src='מרכז הנדל"ן ב- 9/09/2019
      ' path='/' idx={1}/>
      </Grid>
      <Grid item className={styles.item} xs={12} sm={3} ml={6}>
      <ArticleCard header='ככה בונים מדינה' preview='אבי זיתוני, הבעלים של חברת  א.זיתוני מציין כי: "קודם כל הממשלה החדשה חייבת לסיים את  תכנית מחיר למשתכן. זו תכנית שגויה, יקרה מאוד למשק, שעשתה בלגן בשוק החופשי וחסרת כל היגיון כלכלי שבמבחן התוצאה לא הוכיחה עצמה."' src='אקסטרה ב- 19/06/2019' path='/' idx={2} />
      </Grid>
      <Grid item className={styles.item} xs={12} sm={3} ml={6}>
      <ArticleCard header='גבעת שמואל: 2,000 דירות על קרקע פרטית' preview='הוועדה המקומית אישרה תוספת בנייה בשיעור של 14% עבור דירות בנות שלושה חדרים בלבד לזוגות צעירים. בימים אלו החל שיווק הפרויקט הראשון בשכונה, שיכלול דירות קטנות במחיר התחלתי של 1.65 מיליון שקל' src='YNET ב- 31/10/2016' path='/' idx={3} />
      </Grid>
      <Grid item className={styles.item} xs={12} sm={3} ml={6}>
      <ArticleCard header='נשברתם ממחירי הדירות? גורמים בענף ממליצים על פרויקטים בשלב ראשוני' preview='אסף אנגל - מנכ"ל הבית האקדמי, ממליץ על פרויקט אקו מבית זיתוני בגבעת שמואל' src='Bizportal ב- 3/11/2016' path='/' idx={4} />
      </Grid>
      <Grid item className={styles.item} xs={12} sm={3} ml={6}>
      <ArticleCard header='אפקט כחלון: "מחירי הקרקעות הפרטיות זינקו ב-15%-20%"' preview='בראיון באולפן וואלה! NEWS מותח מנכ"ל א. זיתוני, אבי זיתוני, ביקורת חריפה על מחיר למשתכן וטוען כי המהלך מביא להתייקרות בשאר שוק הדירות. "הזוגות הצעירים הם רק 30% משוק הדיור - מה עם השאר?"' src='וואלה! NEWS ב- 22/05/2016' path='/' idx={5} />
      </Grid>
      <Grid item className={styles.item} xs={12} sm={3} ml={6}>
      <ArticleCard header='גבעת שמואל: 2,000 דירות על קרקע פרטית' preview='שנתיים לאחר שנכנסה לתוקף - שכונת המגורים החדשה בגבעת שמואל, שתכלול כ-2,000 דירות, נכנסת לשלבי ביצוע שיווק. הוועדה המקומית לתכנון ולבנייה בעיר אישרה באחרונה תוספת בנייה בשיעור של 14% להיקף המגורים בשכונה, זאת בכפוף לכך שהתוספת תהיה במסגרת של דירות בנות שלושה חדרים, שיהיו מיועדות בעיקר לזוגות צעירים.' src='MSN ב- 1/11/2016' path='/' idx={6} />
      </Grid>
      <Grid item className={styles.item} xs={12} sm={3} ml={6}>
      <ArticleCard header='"סרטון הפרויקט אקו בשכונה הירוקה בכפר סבא"' preview='' src='10/1/2012' path='/' idx={7} />
      </Grid>
      <Grid item className={styles.item} xs={12} sm={3} ml={6}>
      <ArticleCard header='"שוק הנדל"ן לאן"' preview='האם מחירי הדירות יעלו או יירדו? איפה יתרכזו אזורי הביקוש? מה יהיה עם שוק המשכנתאות? ואיך הממשלה יכולה לעזור? בכירי ענף הנדל"ן נדרשים לענות על השאלות הבוערות. ויש להם הרבה מה להגיד. רב שיח מעשיר' src='ידיעות אחרונות - הנדל"ן 24/5/11
      ' path='/' idx={8} />
      </Grid>
      <Grid item className={styles.item} xs={12} sm={3} ml={6}>
      <ArticleCard header='למרות ההסלמה בדרום - הדירות נמכרות' preview='ההסלמה בגבול הרצועה לא פגעה, מסתבר, במספר הדירות שנמכרו ביישובי הדרום...' src='חדשות ערוץ 2, המהדורה 11/4/2011' path='/' idx={9} />
      </Grid>
      <Grid item className={styles.item} xs={12} sm={3} ml={6}>
      <ArticleCard header='"גינדי החליטו שאני הפרונטמן"' preview='כבר שנים נהוג לחשוב שיגאל ומשה גינדי לא עוסקים בבנייה למגורים, אך לא כך הם פני הדברים. בראיון ראשון חושף היזם אבי זיתוני את סיפור שיתוף הפעולה עם האחים, שהוליד מאות יח"ד בעשור האחרון.' src='כלכליסט 28/4/2011' path='/' idx={10} />
      </Grid>
      <Grid item className={styles.item} xs={12} sm={3} ml={6}>
      <ArticleCard header='"המפלט האחרון של תושבי השרון"' preview='חגיגת הנדל"ן הגיעה להוד השרון רק לפני שנתיים, מציאות שניקזה עליה את פליטי ערי השרון המתייקרות. השנה זינקו בה המחירים ב-18% אבל עדיין יש בה הזדמנויות.' src='
      גלובס - נדל"ן 23/5/11' path='\' idx={11} />
      </Grid>
      <Grid item className={styles.item} xs={12} sm={3} ml={6}>
      <ArticleCard header='"סך המכירות כחצי מיליארד"' preview='א. זיתוני מכרה השבוע את הדירה ה-260 בשכונות הירוקות בכפר סבא.' src='העיר, צומת השרון - הרצליה 06/2011' path='/' idx={12} />
      </Grid>
      <Grid item className={styles.item} xs={12} sm={3} ml={6}>
      <ArticleCard header='"מחפשי דירות - על "קבוצת רוכשים" שמעתם?"' preview='עליית מחירי הדירות מייצרת אינסוף המצאות ותרגילים ישראלים שנועדו להשיג הנחות לרוכשים • בענף הנדל"ן קמה תופעה חדשה – קבוצת רוכשים • מה זה אומר? למי זה מיועד והאם מדובר בתופעה משתלמת?' src='חדשות ערוץ 10, המהדורה המרכזית, 16.5.11' path='/' idx={13} />
      </Grid>
      <Grid item className={styles.item} xs={12} sm={3} ml={6}>
      <ArticleCard header='"מצא את ההבדלים"' preview='הן צמודות זו לזו, חולקות את אותו הנוף ובעלות אותו מרחק ממרכז הארץ. ובכל זאת, יש ביניהן הבדלים רבים ברמות הביקוש ובמחירי הדירות.
      ביקשנו  לבחון צמדי ערים סמוכות ולברר מה גורם לאחת להיות עדיפה על השנייה.' src='כלכליסט 28/4/2011' path='/' idx={14} />
      </Grid>
      <Grid item className={styles.item} xs={12} sm={3} ml={6}>
      <ArticleCard header='' preview='' src='' path='' idx={} />
      </Grid>
    </Grid>
</div>
};

export default sizeMe({ monitorWidth: true })(ArticlesContainer)