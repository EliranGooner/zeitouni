import React from 'react'
import styles from './contact-form.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Row } from 'react-bootstrap';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-red.css';
import './awesome-button.css'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';



const ContactForm = () => {
  const { register, errors, handleSubmit } = useForm()
 
  const onSubmit = (data) => {
    console.log(data)
    axios({
      method: "post",
      url: `${process.env.GETFORM_KEY}`,
      data: data
    })
  };


  return <div className={styles.form}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>.אנא השאירו פרטים ונחזור אליכם בהקדם</p>
      <Grid container spacing={3} >
        <Grid item className={styles.item} xs={12} sm={4}>
          <input type="text" name="email" placeholder='דוא״ל' className={styles.input} ref={register({ required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}/>
          <div className={styles.error}>
            {errors.email && 'דוא״ל לא תקין'}
          </div>
        </Grid>
        <Grid item className={styles.item} xs={12} sm={4}>
          <input type="text" name="phone" placeholder="טלפון" className={styles.input}  ref={register({ required: true, pattern: /^\d{10}$/ })}></input>
          <div className={styles.error}>
            {errors.phone && 'מספר טלפון לא תקין'}
          </div>
        </Grid>
        <Grid item className={styles.item} xs={12} sm={4}>
          <input type="text" name="fullName" placeholder='שם מלא' className={styles.input} ref={register({ required: true, maxLength: 30, pattern: /^[\u0590-\u05FF ,.'-]+$/ })}/>
          <div className={styles.error}>
            {errors.fullName && 'שם לא תקין'}
          </div>
        </Grid>
        <Grid item className={styles.item} xs={12} sm={4}>
        </Grid>
        <Grid item className={styles.submit} xs={12} sm={4}>
          <button type="submit" ><AwesomeButton type="primary" className='aws-btn-contact' size='large'>שלח</AwesomeButton></button>
        </Grid>
        <Grid item className={styles.item} xs={12} sm={4}>
        </Grid>
      </Grid>
    </form>
  </div>
}

export default ContactForm