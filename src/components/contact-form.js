import React, { useState } from "react"
import styles from "./contact-form.module.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import { AwesomeButton } from "react-awesome-button"
import "react-awesome-button/dist/themes/theme-red.css"
import "./awesome-button.css"
import { useForm } from "react-hook-form"
import axios from "axios"
import Grid from "@material-ui/core/Grid"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import sizeMe from "react-sizeme"

const ContactForm = props => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const { register, errors, handleSubmit } = useForm()
  const { width } = props.size
  let formBox
  if (width > 420) {
    formBox = styles.input
  } else {
    formBox = styles.input_small
  }

  const onSubmit = data => {
    console.log(data)
    axios({
      method: "post",
      url: `${process.env.GETFORM_KEY}`,
      data: data,
    })
    handleShow()
  }

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>כתובת: ויצמן 64, כפר סבא</p>
        <p>טלפון: 09-7418777</p>
        <p>.אנא השאירו פרטים ונחזור אליכם בהקדם</p>
        <Grid container spacing={3}>
          <Grid item className={styles.item} xs={12} sm={12}>
            <input
              type="text"
              name="fullName"
              placeholder="שם מלא"
              className={formBox}
              ref={register({
                required: true,
                maxLength: 30,
                pattern: /^[\u0590-\u05FF ,.'-]+$/,
              })}
            />
            <div className={styles.error}>
              {errors.fullName && "שם לא תקין"}
            </div>
          </Grid>
          <Grid item className={styles.item} xs={12} sm={12}>
            <input
              type="text"
              name="phone"
              placeholder="טלפון"
              className={formBox}
              ref={register({ required: true, pattern: /^\d{10}$/ })}
            ></input>
            <div className={styles.error}>
              {errors.phone && "מספר טלפון לא תקין"}
            </div>
          </Grid>
          <Grid item className={styles.item} xs={12} sm={12}>
            <input
              type="text"
              name="email"
              placeholder="דוא״ל"
              className={formBox}
              ref={register({
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            <div className={styles.error}>
              {errors.email && "דוא״ל לא תקין"}
            </div>
          </Grid>
          <Grid item className={styles.item} xs={12} sm={4}></Grid>
          <Grid item className={styles.submit} xs={12} sm={4}>
            <button type="submit">
              <AwesomeButton
                type="primary"
                className="aws-btn-contact"
                size="large"
              >
                שלח
              </AwesomeButton>
            </button>
          </Grid>
          <Grid item className={styles.item} xs={12} sm={4}></Grid>
        </Grid>
      </form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title bsPrefix={styles.modal}>!תודה רבה</Modal.Title>
        </Modal.Header>
        <Modal.Body bsPrefix={styles.modal_body}>
          פרטייך נשלחו בהצלחה, ניצור קשר בהקדם
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            סגור
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default sizeMe({ monitorWidth: true })(ContactForm)
