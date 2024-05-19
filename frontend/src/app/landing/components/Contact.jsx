
'use client'
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { slideIn } from "../utils/motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("EMAIL " + process.env.EMAIL);

emailjs.send(
  "service_u74btxq",
  "template_11yo8m1",
  {
    from_name: form.name,
    to_name: "OPC Trading",
    from_email: form.email,
    to_email: "opctrading7@gmail.com",
    message: form.message,
  },
  "ugfLdQoKKL6ae50Nd",
)
.then(
  () => {
    setLoading(false);
    toast.success("Thank you. We will get back to you as soon as possible.");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  },
  (error) => {
    setLoading(false);
    console.error(error);

    toast.error("Ahh, something went wrong. Please try again.");
  }
);
  };

  return (
    <div
      className='max-w-screen-md mx-5 lg:mx-20 pt-10 pb-20 bg-transparent'
    >
      <ToastContainer />
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='bg-slate-900 p-8 rounded-3xl'
      >
        <p className="text-white font-fugaz text-[3rem] lg:text-[4rem]">Get in touch</p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-slate-800 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-slate-800 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-slate-800 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-slate-800 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div> */}
    </div>
  );
};

export default Contact;
