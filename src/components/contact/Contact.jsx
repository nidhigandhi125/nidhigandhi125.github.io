import React from 'react';
import './contact.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c4a69xg', 'template_v8hnq08', form.current, 'QjJRnhkaq9_cjWb6i')
      
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <ul className='links'>
        <li> <a  href="https://www.linkedin.com/in/ngandhi125/" target="_blank"><BsLinkedin size={'35'}/></a></li>
        <li> <a  href="https://github.com/nidhigandhi125" target="_blank"><BsGithub size={'35'}/></a></li>
        <li> <a  href="mailto:nidhigandhi125@gmail.com" target="_blank"><SiGmail size={'35'}/></a></li>
      </ul>
      <div className='container contact__container'>
        <div className='contact__options'>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary btn1'>Send Message</button>
          {/* <div className='submission'>Thank You for contacting</div> */}
        </form>
      </div>
    </section>
  )
}


export default Contact
