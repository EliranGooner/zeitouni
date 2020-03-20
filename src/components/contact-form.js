import React from 'react'
import styles from './contact-form.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Row, Button } from 'react-bootstrap';

const ContactForm = ({action}) => {
  return <div className={styles.form}>
    <form action={action} method="post">
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="שם מלא" bsPrefix={'form-control hebrew'} />
          </Col>
          <Col>
            <Form.Control placeholder="טלפון" />
          </Col>
          <Col>
            <Form.Control placeholder="דוא״ל" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control as="textarea" rows="3" placeholder="תוכן הפנייה" />
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
     
    </form>

  </div>
}

export default ContactForm