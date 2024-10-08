import React, {useRef} from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram} from "react-icons/bs";
import {BsWhatsapp} from "react-icons/bs"
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7hswbt3', 'template_72yqkze', form.current, 'CHFlJ1lUkuB6cM9Kw')   
    e.target.reset() 
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>khushigupta79kk@gmail.com</h5>
            <a href="mailto:khushigupta79kk@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>Khushi Gupta</h5>
            <a href="https://www.instagram.com/khushigupta797?igsh=ZGY4dXZhbTBzY3F6" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91-</h5>
            <a href=" https://wa.me/918434442887" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact