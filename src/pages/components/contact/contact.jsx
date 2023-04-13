import React from 'react'
import "./contact.css"
import ContactForm from '../../../components/contactform/contactform.jsx';
import FooterStatic from "../../../components/footerstatic/footerstatic.jsx"

const Contact = () => {


  return (
    <div className="contact">
       <ContactForm/>
       <FooterStatic/>
    </div>
  )
}

export default Contact