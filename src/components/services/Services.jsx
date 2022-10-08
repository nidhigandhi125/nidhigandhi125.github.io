import React from 'react'
import './services.css'

import image1 from './../../assets/blogplace.png';
import image2 from './../../assets/twitter.png';
import image3 from './../../assets/smartbin_model.png';
import image4 from './../../assets/diabetes_prediction.jpg';
import image5 from './../../assets/eye_for_vision.jpg';
import image6 from './../../assets/logo1.png';

export default () => {
  return (
//     <Swiper
//       // install Swiper modules
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={0}
//       slidesPerView={5}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//     >
//       <SwiperSlide><div className='container portfolio__container'>
//         <article className='portfolio__item'>
//           <div className='portfolio__item-image'>
//             <img src={image1} alt="portfolio image" />
//             <div className='overlay'>
//               <h3 className='text'>BlogPlace</h3>
//               <a  href="https://github.com" target="_blank"><BsGithub size={'20'}/></a> 
//             {/* <div className='portfolio__item-cta'> */}
//               {/* <a href="https://github.com" className='btn' target='_blank'>Github</a>  */}
            
//             </div>
//           </div>
//         </article>
//       </div></SwiperSlide>
//       <SwiperSlide><div className='container portfolio__container'>
//         <article className='portfolio__item'>
//           <div className='portfolio__item-image'>
//             <img src={image1} alt="portfolio image" />
//             <div className='overlay'>
//               <h3 className='text'>BlogPlace</h3>
//               <a  href="https://github.com" target="_blank"><BsGithub size={'15'}/></a> 
//             {/* <div className='portfolio__item-cta'> */}
//               {/* <a href="https://github.com" className='btn' target='_blank'>Github</a>  */}
            
//             </div>
//           </div>
//         </article>
//       </div></SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//     </Swiper>
//   );
// };

<section id="portfolio">
      <h5>My Work</h5>
      <h2>Portfolio</h2>
    <div className="service_container">
        <div className="box">
        <a href="https://github.com/nidhigandhi125/BlogPlace-Adobe-xd-" target="_blank">
            <img src={image1} alt="Blogplace"/>
        </a>
            <span>BlogPlace</span>
        </div>
        <div className="box">
        <a href="https://github.com/nidhigandhi125/Twitter" target="_blank">
            <img src={image2} alt="Twitter Clone"/>
        </a>
            <span>Twitter Clone</span>
        </div>
        <div className="box">
        <a href="https://github.com/nidhigandhi125/SmartBin-An-Automatic-and-Informative-Waste-Management-System" target="_blank">
            <img src={image3} alt="Smart Bin"/>
        </a>
            <span>SmartBin</span>
        </div>
        <div className="box">
        <a href="https://github.com/nidhigandhi125/Diabetes-Prediction" target="_blank">
            <img src={image4} alt="Diabetes Prediction"/>
        </a>
            <span>Diabetes Prediction</span>
        </div>
        <div className="box">
        <a href="https://github.com/nidhigandhi125/Eye-For-Vision" target="_blank">
            <img src={image5} alt="Eye for Vision"/>
        </a>
            <span>Eye For Vision</span>
        </div>
        <div className="box">
        <a href="https://github.com/nidhigandhi125/MediBox-An-Integrated-Web-Service-System-for-Personalized-Medical-Assistance/" target="_blank">
            <img src={image6} alt="Medibox"/>
        </a>
            <span>Medibox</span>
        </div>
    </div>
</section>

    );
};
