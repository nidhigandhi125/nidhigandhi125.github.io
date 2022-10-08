import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from './../../assets/m1.png'
import { FaLessThan } from 'react-icons/fa'
import {BsSlashLg} from 'react-icons/bs'
import {FaGreaterThan} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import {BsChevronDoubleDown} from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className='mainhead'>
          <h2>Hello I'm</h2>
          <h1 class="start word">
            <span className='word name1'>Nidhi</span>
            <span className='word name2'> Gandhi</span>
          </h1> 
          <h2>Fullstack Developer</h2>
          <br/>
          <CTA/>

       
        <div className='me'>
          <div className='linkedin bounce'>
            <a  href="https://www.linkedin.com/in/ngandhi125/" target="_blank"><BsLinkedin size={'50'}/></a>
          </div>

          <div className='github bounce'>
            <a  href="https://github.com/nidhigandhi125" target="_blank"><BsGithub size={'50'}/></a>
          </div>

          <div className='gmail bounce'>
            <a  href="mailto:nidhigandhi125@gmail.com" target="_blank"><SiGmail size={'50'}/></a>
          </div>
        </div>
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down for More</a>
      </div>

      <div className='down bounce'>
            <a  href="#about"><BsChevronDoubleDown size={'50'}/></a>
      </div>
    </header>
  )
}

export default Header