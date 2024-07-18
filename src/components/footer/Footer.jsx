import React from 'react'
import "./footer.css"
import {BsInstagram} from "react-icons/bs";
import { IoLogoLinkedin } from 'react-icons/io';
import { IoLogoGithub } from 'react-icons/io';



const Footer = () => {
  return (
  <footer>
    <a href="#" className='footer__logo'>Khushi's Portfolio</a>
    <ul className='permalinks'>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="footer__socials">
      <a href="https://www.linkedin.com/in/khushi-gupta-76b983260/" target="_blank"><IoLogoLinkedin /></a>
      <a href="https://www.instagram.com/khushigupta797?igsh=ZGY4dXZhbTBzY3F6" target="_blank"><BsInstagram/></a>
      <a href="https://github.com/khushikumari05" target="_blank"><IoLogoGithub/></a>
    </div>
    <div className="footer__copyright">
      <small>&copy; Khushi's Portfolio. All rights reserved.</small>
    </div>
  </footer>
  )
}

export default Footer