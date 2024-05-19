'use client'

import {React , useState} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel = () => {

  const logos = [
    "./carousel-1.png",
    "./carousel-2.png",
    "./carousel-3.png",
    "./carousel-4.png",
  ];

  const [settings] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    arrows:false
  });

  return (
    <div className='bg-background w-full'>
     <div className=' py-20 -mt-0.5 max-w-screen-2xl mx-auto'>
       <Slider {...settings}>
        {logos.map((logo , index) => {
          return (
           <div key={index} className='grid place-items-center'>
            <img src={logo} alt='logo' className='w-[60%] lg:w-40 mx-auto'/>
           </div>
          )
        })}
       </Slider>
    </div>
    </div>

  )
}

export default Carousel