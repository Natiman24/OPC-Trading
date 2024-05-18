import React from 'react'

const Hero = () => {
  return (
    <div className='w-full mb-10 grid grid-cols-2'>
        <div className='flex flex-col gap-y-10 pl-28'>
          <h1 className='font-fugaz text-[7rem] text-white text-left pt-28 leading-tight'>OPC <br/> <span className='ml-10'>Trading</span></h1>
          <p className='font-lato text-left text-2xl text-white'>
            Unleash unmatched printing prowess with our sales, maintenance, repair services, and cutting-edge equipment. Elevate your business!
          </p>
          <button className='bg-white text-black self-start w-40 h-16 rounded-2xl text-2xl font-lato'>
            Explore
          </button>
        </div>
        <div className='flex items-start justify-center gap-x-10'>
            <img src="./hero-image-1.png" alt="hero-image" className=''/>
            <img src="./hero-image-2.png" alt="hero-image" className=''  />

        </div>
    </div>
  )
}

export default Hero