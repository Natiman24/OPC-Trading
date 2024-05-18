import React from 'react'

const Service = () => {
  return (
    <div className='text-white py-20 flex flex-wrap gap-20 items-start justify-evenly lg:gap-48 bg-background'>
        <div className='flex flex-col gap-8'>
            <h3 className='text-[5rem] font-fugaz text-white pl-28 leading-none'>Services</h3>
            <img src="./service.png" alt="services" className=' w-full ml-16' />
        </div>
        <div className='flex flex-col gap-7 items-start pl-5 lg:pl-40'>
           <div className='w-52 h-2 bg-white'></div>
           <div className='text-left text-white flex flex-col gap-4'>
            <h5 className='text-3xl font-bold font-lato'>Sales & After Sales</h5>
            <p className='font-lato text-lg'>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Faucibus in libero risus
            </p>
           </div>
           <div className='text-left text-white flex flex-col gap-4'>
            <h5 className='text-3xl font-bold font-lato'>Maintenance</h5>
            <p className='font-lato text-lg'>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Faucibus in libero risus
            </p>
           </div>
           <div className='text-left text-white flex flex-col gap-4'>
            <h5 className='text-3xl font-bold font-lato'>Repairment</h5>
            <p className='font-lato text-lg'>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Faucibus in libero risus
            </p>
           </div>
           <button className='bg-white text-black self-start w-36 h-14 rounded-2xl text-2xl font-lato'>
            Explore
          </button>
        </div>

    </div>
  )
}

export default Service