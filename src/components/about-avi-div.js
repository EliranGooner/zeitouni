import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from "react"
import styles from "./about-avi-div.module.scss"
import { AwesomeButton } from "react-awesome-button"
import "react-awesome-button/dist/themes/theme-red.css"
import "./awesome-button.css"
import Fade from "react-reveal/Fade"
import Image from "./image"
import divider from "../images/title-divider.png"
import sizeMe from "react-sizeme"

const AboutAviDiv = props => {
  const { width } = props.size
  const imgStyle = {
    height: "100%",
    width: "230%",
    objectFit: "cover",
    margin: "0 10px 0 0",
  }
  return (
    <div className={styles.about}>
      <Fade duration={2000} right>
        {width < 480 ? (
          <div className={styles.avi}>
            <div
              className={styles.avi_text}
              itemScope
              itemType="http://schema.org/Person"
            >
              <h1 itemProp="name">אבי זיתוני</h1>
              <img src={divider} alt="חוצץ"></img>
              <Image
                imgName="avi_new_cropped.jpg"
                alt="אבי זיתוני"
                className={styles.avi_small}
                itemProp="image"
              />
              <p itemProp="description">
                אבי זיתוני, שנולד בבת ים וגדל בכפר סבא, הוא דור שני למשפחת
                קבלנים. בתחילת שנות ה-80, לאחר שהשתחרר מהצבא, החל אבי זיתוני
                לעבוד כשכיר אצל היזמים משה ויגאל גינדי. אביו אמנם עבד גם הוא
                בנדל"ן, אך אבי בחר לצמוח מלמטה וללמוד את יסודות הענף, השיווק
                והביצוע דרך היזמים הכי וותיקים והמנוסים באותה תקופה. אחרי 5 שנים
                אצל האחים גינדי הוא פרש לדרך עצמאית ועד היום הוא בנה מעל 2,500
                יחידות דיור
              </p>
              <div className={styles.button_div}>
                <AniLink cover direction="right" bg="#808080" to="/avi/">
                  <AwesomeButton type="primary" className="aws-btn">
                    המשיכו לקרוא
                  </AwesomeButton>
                </AniLink>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.avi}>
            <Image
              imgName="avi_new_cropped_side.jpg"
              alt="אבי זיתוני"
              style={imgStyle}
            />
            <div
              className={styles.avi_text}
              itemScope
              itemType="http://schema.org/Person"
            >
              <h1 itemProp="name">אבי זיתוני</h1>
              <img src={divider} alt="חוצץ"></img>
              <p itemProp="description">
                אבי זיתוני, שנולד בבת ים וגדל בכפר סבא, הוא דור שני למשפחת
                קבלנים. בתחילת שנות ה-80, לאחר שהשתחרר מהצבא, החל אבי זיתוני
                לעבוד כשכיר אצל היזמים משה ויגאל גינדי. אביו אמנם עבד גם הוא
                בנדל"ן, אך אבי בחר לצמוח מלמטה וללמוד את יסודות הענף, השיווק
                והביצוע דרך היזמים הכי וותיקים והמנוסים באותה תקופה. אחרי 5 שנים
                אצל האחים גינדי הוא פרש לדרך עצמאית ועד היום הוא בנה מעל 2,500
                יחידות דיור
              </p>
              <div className={styles.button_div}>
                <AniLink cover direction="right" bg="#808080" to="/avi/">
                  <AwesomeButton
                    type="primary"
                    className="aws-btn"
                    size="large"
                  >
                    המשיכו לקרוא
                  </AwesomeButton>
                </AniLink>
              </div>
            </div>
          </div>
        )}
      </Fade>
    </div>
  )
}

export default sizeMe({ monitorWidth: true })(AboutAviDiv)
