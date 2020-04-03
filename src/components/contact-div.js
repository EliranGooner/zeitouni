import React from "react";
import styles from './contact-div.module.scss';
import ContactForm from "./contact-form";


const ContactDiv = () => {
    return <div className={styles.contact} itemScope itemType='https://schema.org/ContactPage'>
        <ContactForm/>
    </div>
};

export default ContactDiv