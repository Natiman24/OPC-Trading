import React from 'react'

const Value = () => {
  return (
    <div className='text-white py-20 grid place-items-center grid-cols-2 px-20 items-start justify-evenly bg-background'>
        <div className='flex flex-col gap-7 items-start'>
            <h3 className='text-[5rem] font-fugaz text-white pl-28 leading-none mb-10'>Values</h3>
           <div className='text-left text-white flex flex-col gap-4 pl-10'>
            <h5 className='text-3xl font-bold font-lato'>Quality Obsessed</h5>
            <p className='font-lato text-lg'>
                Ensure top standards for consumables, precise repairs by skilled technicians,
                customer satisfaction, sustainable practices, and continuous improvement.
            </p>
           </div>
           <div className='text-left text-white flex flex-col gap-4 pl-10'>
            <h5 className='text-3xl font-bold font-lato'>Efficient Dependability</h5>
            <p className='font-lato text-lg'>
                Fast turnaround, on-time delivery,
                 and unwavering reliability in every project.
            </p>
           </div>
           <div className='text-left text-white flex flex-col gap-4 pl-10'>
            <h5 className='text-3xl font-bold font-lato'>Expert Guidance</h5>
            <p className='font-lato text-lg'>
              Knowledgeable assistance, reliable repairs,
              and expert support to meet your needs.
            </p>
           </div>
        </div>
        <div className='flex flex-col gap-8 pl-28'>
            <div className='w-full h-2 mx-6 bg-white'></div>
            <img src="./value.png" alt="services" className=' w-full mx-6' />
        </div>
    </div>
  )
}

export default Value