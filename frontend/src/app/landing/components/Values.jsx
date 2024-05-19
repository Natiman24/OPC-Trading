import React from 'react'

const Value = () => {
  return (
        <div className='text-white md:py-20 grid md:grid-cols-2 grid-cols-1 gap-12 items-start justify-evenly bg-background max-md:mt-16'>
        <div className='flex flex-col gap-8 mx-5'>
            <h3 className='text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] font-fugaz text-white md:pl-14 lg:pl-20 xl:pl-28 max-md:text-center leading-none'>Values</h3>
            <div className=' text-center md:text-left text-white flex flex-col gap-4 ml-5 xl:ml-10'>
            <h5 className='text-3xl font-bold font-lato'>Quality Obsessed</h5>
            <p className='font-lato text-lg max-w-[660px]'>
                Ensure top standards for consumables, precise repairs by skilled technicians and continuous improvement.
            </p>
           </div>
           <div className=' text-center md:text-left text-white flex flex-col gap-4 ml-5 xl:ml-10'>
            <h5 className='text-3xl font-bold font-lato'>Efficient Dependability</h5>
            <p className='font-lato text-lg max-w-[660px]'>
                Fast turnaround, on-time delivery, and unwavering reliability in every project.
            </p>
           </div>
           <div className=' text-center md:text-left text-white flex flex-col gap-4 ml-5 xl:ml-10'>
            <h5 className='text-3xl font-bold font-lato'>Expert Guidance</h5>
            <p className='font-lato text-lg '>
                Knowledgeable assistance, reliable repairs, and expert support to meet your needs.
            </p>
           </div>
        </div>
        <div className='flex flex-col gap-7 items-start px-5 2xl:pl-40'>
           <div className='w-52 h-2 bg-white max-md:hidden mx-auto'></div>
            <img src="./value.png" alt="services" className=' max-md:w-[80%] max-md:mx-[10%] md:w-4/5 md:mx-auto max-md:h-40' />
        </div>

    </div>
  )
}

export default Value