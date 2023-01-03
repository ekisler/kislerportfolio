import { useEffect, useState } from "react";
import Particle from "../Particle";
import { Row, Container } from "react-bootstrap";
import InputField from "./InputField"
import SelectField from "./SelectField";
import TextareaField from "./TextareaField";
import { Button } from 'react-bootstrap';

import emailjs from 'emailjs-com';

const Contact = () => {
  const [values, setValues] = useState({
    from_name: '',
    email: '',
    role: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_oyesgjp', 'template_6wcyhoi', values, 'OJTwThfq9tKtpWJ-6')
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
          from_name: '',
          email: '',
          role: '',
          message: ''
        });
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
      });
  }

  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }
  return (
    <div>
    <div className="home-button">
      <Button variant="primary" size="sm" href="/contact/?lng=es">ES</Button>
      <Button variant="primary" size="sm" href="/contact/?lng=en">EN</Button>
    </div>
    <Container fluid className="contact">
      <Row style={{ justifyContent: "center", padding: "50px" }}></Row>
      {status && renderAlert()}
      <form onSubmit={handleSubmit}>
        <h2 className="text-info">Send me a message</h2>
        <h6 className="text-info">Full Name</h6>
          <InputField value={values.from_name} handleChange={handleChange} name="from_name" type="text" placeholder="John Doe" />
        <h6 className="text-info">E-Mail</h6>
          <InputField value={values.email} handleChange={handleChange}  name="email" type="email" placeholder="jphn@example.com" />
        <h6 className="text-info">Subject</h6>
          <SelectField handleChange={handleChange} name="role"/>
        <h6 className="text-info">Your message here</h6>
          <TextareaField value={values.message} handleChange={handleChange} name="message"/>
        <button type="submit" className="fork-btn-inner bg-primary">Send</button>
      </form>
      <Particle />
    </Container>
    </div>
  )
}

const renderAlert = () => (
  
  <Container fluid className="contact-section" style={{ justifyContent: "center", padding: "150px" }}>
    <p className="text-info"><h2>¡Your message submitted successfully!</h2></p>
  </Container>
)

export default Contact