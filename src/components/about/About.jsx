import React from "react";
import './about.css';
import ME from './../../assets/m1.png';
import {BiAward} from 'react-icons/bi';
import {MdOutlineSchool} from 'react-icons/md';
import {MdOutlineSportsBasketball} from 'react-icons/md';



const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>



        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
            <div className="container about__container">
              <p className="four">
                Hi, I am Nidhi Gandhi. Looking forward to expand my knowledge 
                base and apply it to the real world in order to contribute to the society. 
                I am passionate about developing user experiences that are impactful, meaningful, and effortless.
              </p>
              <div className="about__me">
                  <div className="about__me-image">
                    <img src={ME} alt="illustration" />
                  </div>
              </div>
            </div> 
              <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </article>

            {/* <article className="about__card">
              <MdOutlineSchool className="about__icon"></MdOutlineSchool>
              <h5>Education</h5>
              <small>Masters in Computer Science</small>
            </article>

            <article className="about__card">
              <MdOutlineSportsBasketball className="about__icon"></MdOutlineSportsBasketball>
              <h5>Hobbies</h5>
              <small>Dancing,Painting,Sports</small>
            </article>
          </div> */}
      
         
          </div>
        </div>
    </section>
  )
}

export default About