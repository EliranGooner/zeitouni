import React from "react";
import styles from './articles-container.module.scss';
import Grid from '@material-ui/core/Grid';
import ArticleCard from './article-card';

const ArticlesContainer = () => {

  return <div dir="rtl">
    <Grid container className={styles.container} spacing={1} >
      <Grid item  xs={12} lg={3} md={6}>
      <ArticleCard header='אבי זיתוני: "היום מורידים מינונים. לא קופצים מעל הפופיק"' preview='היזם אבי זיתוני מספר על השת"פ הארוך עם האחים גינדי, על החיבה לעיסקאות קומבינציה ועל ההתמקדות רק במעגל השני של תל אביב' src='מרכז הנדל"ן ב- 9/09/2019
      ' path='https://www.nadlancenter.co.il/article/1748' idx={1}/>
      </Grid>
      <Grid item  xs={12} lg={3} md={6}>
      <ArticleCard header='ככה בונים מדינה' preview='אבי זיתוני, הבעלים של חברת  א.זיתוני מציין כי: "קודם כל הממשלה החדשה חייבת לסיים את  תכנית מחיר למשתכן. זו תכנית שגויה, יקרה מאוד למשק, שעשתה בלגן בשוק החופשי וחסרת כל היגיון כלכלי שבמבחן התוצאה לא הוכיחה עצמה."' src='אקסטרה ב- 19/06/2019' path='https://www.extra-mag.co.il/%D7%9B%D7%9B%D7%94-%D7%91%D7%95%D7%A0%D7%99%D7%9D-%D7%9E%D7%93%D7%99%D7%A0%D7%94/' idx={2} />
      </Grid>
      <Grid item  xs={12} lg={3} md={6}>
      <ArticleCard header='גבעת שמואל: 2,000 דירות על קרקע פרטית' preview='הוועדה המקומית אישרה תוספת בנייה בשיעור של 14% עבור דירות בנות שלושה חדרים בלבד לזוגות צעירים. בימים אלו החל שיווק הפרויקט הראשון בשכונה, שיכלול דירות קטנות במחיר התחלתי של 1.65 מיליון שקל' src='YNET ב- 31/10/2016' path='https://www.ynet.co.il/articles/0,7340,L-4872631,00.html' idx={3} />
      </Grid>
      <Grid item  xs={12} lg={3} md={6}>
      <ArticleCard header='נשברתם ממחירי הדירות? גורמים בענף ממליצים על פרויקטים בשלב ראשוני' preview='אסף אנגל - מנכ"ל הבית האקדמי, ממליץ על פרויקט אקו מבית זיתוני בגבעת שמואל' src='Bizportal ב- 3/11/2016' path='https://www.bizportal.co.il/realestates/news/article/454117' idx={4} />
      </Grid>
      <Grid item  xs={12} lg={3} md={6}>
      <ArticleCard header='אפקט כחלון: "מחירי הקרקעות הפרטיות זינקו ב-15%-20%"' preview='בראיון באולפן וואלה! NEWS מותח מנכ"ל א. זיתוני, אבי זיתוני, ביקורת חריפה על מחיר למשתכן וטוען כי המהלך מביא להתייקרות בשאר שוק הדירות. "הזוגות הצעירים הם רק 30% משוק הדיור - מה עם השאר?"' src='וואלה! NEWS ב- 22/05/2016' path='https://nadlan.walla.co.il/item/2963345' idx={5} />
      </Grid>
      <Grid item  xs={12} lg={3} md={6}>
      <ArticleCard header='"סרטון הפרויקט אקו בשכונה הירוקה בכפר סבא"' preview='' src='10/1/2012' path='https://www.youtube.com/watch?v=Y3XO3SIv3a0' idx={6} />
      </Grid>
      <Grid item  xs={12} lg={3} md={6}>
      <ArticleCard header='למרות ההסלמה בדרום - הדירות נמכרות' preview='ההסלמה בגבול הרצועה לא פגעה, מסתבר, במספר הדירות שנמכרו ביישובי הדרום...' src='חדשות ערוץ 2, המהדורה 11/4/2011' path='https://www.mako.co.il/news-channel2/Channel-2-Newscast/Article-81523a720954f21004.htm' idx={7} />
      </Grid>
      <Grid item  xs={12} lg={3} md={6}>
      <ArticleCard header='"שוק הנדל"ן לאן"' preview='האם מחירי הדירות יעלו או יירדו? איפה יתרכזו אזורי הביקוש? מה יהיה עם שוק המשכנתאות? ואיך הממשלה יכולה לעזור? בכירי ענף הנדל"ן נדרשים לענות על השאלות הבוערות. ויש להם הרבה מה להגיד. רב שיח מעשיר' src='ידיעות אחרונות - הנדל"ן 24/5/11
      ' path='' idx={8} />
      </Grid>
      <Grid item  xs={12} lg={3} md={6}>
      <ArticleCard header='"גינדי החליטו שאני הפרונטמן"' preview='כבר שנים נהוג לחשוב שיגאל ומשה גינדי לא עוסקים בבנייה למגורים, אך לא כך הם פני הדברים. בראיון ראשון חושף היזם אבי זיתוני את סיפור שיתוף הפעולה עם האחים, שהוליד מאות יח"ד בעשור האחרון.' src='כלכליסט 28/4/2011' path='' idx={9} />
      </Grid>
      <Grid item  xs={12} lg={3} md={6}>
      <ArticleCard header='"המפלט האחרון של תושבי השרון"' preview='חגיגת הנדל"ן הגיעה להוד השרון רק לפני שנתיים, מציאות שניקזה עליה את פליטי ערי השרון המתייקרות. השנה זינקו בה המחירים ב-18% אבל עדיין יש בה הזדמנויות.' src='גלובס - נדל"ן 23/5/11' path='' idx={10} />
      </Grid>
      <Grid item  xs={12} lg={3} md={6}>
      <ArticleCard header='"סך המכירות כחצי מיליארד"' preview='א. זיתוני מכרה השבוע את הדירה ה-260 בשכונות הירוקות בכפר סבא.' src='העיר, צומת השרון - הרצליה 06/2011' path='/' idx={11} />
      </Grid>
      <Grid item  xs={12} lg={3} md={6}>
      <ArticleCard header='"מצא את ההבדלים"' preview='הן צמודות זו לזו, חולקות את אותו הנוף ובעלות אותו מרחק ממרכז הארץ. ובכל זאת, יש ביניהן הבדלים רבים ברמות הביקוש ובמחירי הדירות.
      ביקשנו  לבחון צמדי ערים סמוכות ולברר מה גורם לאחת להיות עדיפה על השנייה.' src='כלכליסט 28/4/2011' path='/' idx={12} />
      </Grid>
    </Grid>
</div>
};

export default ArticlesContainer