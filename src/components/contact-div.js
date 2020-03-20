import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import styles from './contact.module.scss'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import { isWidthUp } from "@material-ui/core";
import ContactForm from "./contact-form";


const ContactDiv = ({}) => {
    return <div className={styles.contact}>
        <ContactForm action='https://www.flexyform.com/f/a9e4bfa16bf4fb187682e5e55d64f4e370308e89'></ContactForm>
    </div>
};

export default ContactDiv