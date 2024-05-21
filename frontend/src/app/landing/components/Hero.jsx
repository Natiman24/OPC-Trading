'use client'

import React from 'react'
import { SectionWrapper } from '../hoc';

const Hero = () => {
  return (
    <div className='flex flex-col mb-10'>
    <div className='w-full flex max-md:grid-cols-1 max-md:flex-col-reverse'>
        <div className='flex flex-col gap-y-10'>
          <h1 className='font-fugaz text-[3rem] md:text-[4rem] lg:text-[7rem] text-white md:text-left text-center pt-8 lg:pt-28 sm:pl-6 md:pl-10 leading-tight'>OPC <br className='max-md:hidden'/> <span className='md:ml-10'>Trading</span></h1>
          <p className='font-lato text-2xl md:text-left text-center text-white md:max-w-xl lg:max-w-max pl-4 md:pl-10 max-md:pr-4'>
            Unleash unmatched printing prowess with our sales, maintenance, repair services, and cutting-edge equipment. Elevate your business!
          </p>
          <button className='bg-white text-black md:self-start self-center max-md:mb-10 w-40 h-16 rounded-2xl text-2xl font-lato md:ml-10'>
            Explore
          </button>
        </div>
        <div className='flex items-start justify-center gap-x-10'>
            <img src="./hero-image-1.png" alt="hero-image" className='max-md:hidden w-[40%]'/>
            <img src="./hero-image-2.png" alt="hero-image" className='max-md:hidden w-[40%]'  />
        </div>
    </div>
      <img src="./hero-mobile.png" alt="hero-image" className='md:hidden w-[80%] mx-auto h-52'  />
    </div>
  )
}

export default SectionWrapper(Hero, "hero");
