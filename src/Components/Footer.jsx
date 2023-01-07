import React, { useEffect } from 'react'
import { BsCursorFill, BsGithub } from 'react-icons/bs'
import { FiMail, FiPhone } from 'react-icons/fi'
import { SiLinkedin } from 'react-icons/si'
import "./ccss/Footer.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        AOS.init({duration:"1000"});
      }, [])
  return (
    <div>
        <h1 className='conthead'>Reach Out to me !</h1>
        <div className='contactdet'>
        <div data-aos="zoom-in">
          <FiPhone /> <div className='cdt'><span>+91-9503803512</span></div>
        </div>
        <div data-aos="zoom-in">
          <FiMail /><div className='cdt'><span>sammyak.deosale.1@gmail.com</span></div>
        </div>
        <div data-aos="zoom-in">
          <BsGithub /><div className='cdt'><a href="https://github.com/Sammyak555"><span>Sammyak555</span></a></div>
        </div>
        <div data-aos="zoom-in">
          <SiLinkedin /><div className='cdt'><a href="https://www.linkedin.com/in/sammyak-deosale-1b9abb229/"><span>Sammyak Deosale</span></a></div>
        </div>
        <br />
      </div>
    </div>
  )
}

export default Footer