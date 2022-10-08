import React from 'react'
import './nav.css'
import {GoHome} from 'react-icons/go'
import {BiUserPin} from 'react-icons/bi'
import {FaLaptopCode} from 'react-icons/fa'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><GoHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUserPin/></a>
      <a href="#tag-cloud" onClick={() => setActiveNav('#tag-cloud')} className={activeNav === '#tag-cloud' ? 'active' : ''}><FaLaptopCode/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineFundProjectionScreen/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage/></a>

    </nav>
  )
}

export default Nav