'use client'

import { React ,useEffect,useRef } from 'react';
import {Tilt} from "react-tilt";
import { motion , useInView } from "framer-motion";
import {fadeIn} from "../utils/motion"

const Testimonials = () => {

    const testimonials = [
        {
            "index":0,
            "name":"John Doe",
            "photo":"./hero-image-1.png",
            "content":"OPC Trading redefined our material expectations."
        },
        {
            "index":1,
            "name":"John Doe",
            "photo":"./hero-image-1.png",
            "content":"OPC Trading redefined our material expectations."
        },
        {
            "index":2,
            "name":"John Doe",
            "photo":"./hero-image-1.png",
            "content":"OPC Trading redefined our material expectations."
        },
    ]

  return (
    <div className='bg-background'>
        <div>
            <h1 className='text-[5rem] font-fugaz text-center text-white'>Testimonials</h1>
        </div>
    <div className='flex flex-wrap justify-center pt-10 gap-32 pb-14'>
            {testimonials.map((testimonial) => {
            return (
                <TestimonialCard testimonial={testimonial} key={testimonial.index}/>
            )
        })}

    </div>
    </div>
  )
}

const TestimonialCard = (props) => {

    const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {}, [isInView])

    let direction = "right";

    if(props?.testimonial.index == 0){
     direction = "right";
    }
    if(props?.testimonial.index == 1){
     direction = "up";
    }
    if(props?.testimonial.index == 2){
     direction = "left";
    }
    return (
    <Tilt className=''>
    <motion.div
      variants={fadeIn(direction, "spring", props?.testimonial.index * 0.5, 0.75)}
      initial="hidden"
      animate={isInView?"show":"hidden"}
      className=' green-pink-gradient p-[1px] rounded-[20px]'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        ref = {ref}
        className='bg-slate-900 rounded-[20px] gap-5 min-h-[18rem] py-10 px-8 max-w-[24rem] flex justify-evenly items-center flex-col'
      >
        <img src={props?.testimonial.photo} alt="" className='rounded-full w-32 h-32'/>
        <h3 className='text-white max-lg:text-[22px] lg:text-[25px] font-bold text-center'>
          {props?.testimonial.name}
        </h3>
        <h3 className='text-white max-lg:text-[15px] lg:text-[18px] text-center'>
          &quot;{props?.testimonial.content}&quot;
        </h3>
      </div>
    </motion.div>
  </Tilt>
    )
}

export default Testimonials