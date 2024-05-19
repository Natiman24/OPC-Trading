import React from 'react'

const Service = () => {
  return (
    <div className='text-white md:py-20 grid md:grid-cols-2 grid-cols-1 gap-12 items-start justify-evenly bg-background max-md:mt-16'>
        <div className='flex flex-col gap-8'>
            <h3 className='text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] font-fugaz text-white md:pl-14 lg:pl-20 xl:pl-28 max-md:text-center leading-none'>Services</h3>
            <img src="./service.png" alt="services" className=' max-md:w-[80%] max-md:mx-[10%] ml-5 md:w-full xl:ml-16 max-md:hidden' />
        </div>
        <div className='flex flex-col gap-7 items-start px-5 2xl:pl-30'>
           <div className='w-52 h-2 bg-white max-md:hidden'></div>
           <div className=' text-center md:text-left text-white flex flex-col gap-4'>
            <h5 className='text-3xl font-bold font-lato'>Sales & After Sales</h5>
            <p className='font-lato text-lg '>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Faucibus in libero risus
            </p>
           </div>
           <div className=' text-center md:text-left text-white flex flex-col gap-4'>
            <h5 className='text-3xl font-bold font-lato'>Maintenance</h5>
            <p className='font-lato text-lg max-w-[660px] mx-auto'>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Faucibus in libero risus
            </p>
           </div>
           <div className=' text-center md:text-left text-white flex flex-col gap-4'>
            <h5 className='text-3xl font-bold font-lato'>Repairment</h5>
            <p className='font-lato text-lg '>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Faucibus in libero risus
            </p>
           </div>
           <button className='bg-white text-black max-md:my-5 self-center md:self-start w-36 h-14 rounded-2xl text-2xl font-lato'>
            Explore
          </button>

          <img src="./service.png" alt="services" className=' w-[80%] mx-[10%] md:hidden'/>

        </div>

    </div>
  )
}

export default Service