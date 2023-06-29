import { Container } from 'react-bootstrap'
import './ContactPage.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import LandPageSecFive from '../../Components/LandPageSecFive/LandPageSecFive';

const ContactPage = () => {
  return (
    <Container>
      <LandPageSecFive/>
    </Container>
  )
}

export default ContactPage