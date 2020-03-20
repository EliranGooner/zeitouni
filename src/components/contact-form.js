import React from 'react'
import styles from './contact-form.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Row } from 'react-bootstrap';
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-red.css';
import './awesome-button.css'

const ContactForm = ({action}) => {
  return <div className={styles.form}>
    <form action={action} method="post">
      <div className={styles.form_container}>
        <div className={styles.name}>
          <input type="text" name="fullname" placeholder='שם מלא' className={styles.input_row_one}/>
        </div>
        <div className={styles.phone}>
          <input type="text" name="phone" placeholder="טלפון" className={styles.input_row_one}></input>
        </div>
        <div className={styles.email}>
          <input type="email" name="email" placeholder='דוא״ל' className={styles.input_row_one}/>
        </div>
        <div className={styles.message}>
          <textarea name="message" rows="5" placeholder='הודעה' className={styles.input_row_two}></textarea>
        </div>
        <div className={styles.submit}>
          <button type="submit" className={styles.submit_background}><AwesomeButton type="primary" className='aws-btn-contact' size='large'>שלח</AwesomeButton></button>
        </div>
      </div>
    </form>
  </div>
}

export default ContactForm