import React from 'react'
import './portfolio.css'
import image1 from './../../assets/blogplace.png';
import {BsGithub} from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import image2 from './../../assets/twitter.png';
// import {BsGithub} from 'react-icons/bs'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      {/* <div className='container portfolio__container'> */}
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={1}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
        
          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image1} alt="portfolio image" />
              <div className='overlay'>
                <h3 className='text'>BlogPlace</h3>
                <a  href="https://github.com" target="_blank"><BsGithub size={'15'}/></a> 
              {/* <div className='portfolio__item-cta'> */}
                {/* <a href="https://github.com" className='btn' target='_blank'>Github</a>  */}
              
              </div>
            </div>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img classsName='image2' src={image2} alt="portfolio image" />
              <div className='overlay'>
                <h3 className='text'>Twitter Clone
                <a href="https://github.com" target="_blank"><BsGithub size={'20'}/></a> </h3>            
              </div>
            </div>
          </article>
        </SwiperSlide>
      {/* </div> */}
      </Swiper>
    </section>



  );
};
export default Portfolio