import React, { useState } from 'react';
//axios
import axios from 'axios';
//motion
import { motion } from 'framer-motion'
//variants
import { fadeIn } from '../variants'



const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/contact', formData);
      console.log(response.data); // Handle success response
    } catch (error) {
      console.error('Error submitting contact form:', error); // Handle error
    }
  };

  return <section className='py-16 lg:section' id='contact'>
    <div className='conatiner mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false , amount: 0.3}} 
        className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-accent
            font-medium mb-2 tracking-wide'>Get in Touch</h4>
            <h2 className='text-[42px] lg:text-[90px] leading-none mb-12'>Let's Work <br/> Together</h2>
          </div>
          </motion.div>
        {/* form */}
        <motion.form
        onSubmit={handleSubmit} 
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false , amount: 0.3}}
         className='flex-1 '>
          <input
          type='text'
          name='name'
          placeholder='Your name'
          value={formData.name}
          onChange={handleChange}
           className='bg-transparent border-b py-3 placeholder:text-white focus:border-accent 
          outline-none w-full transition-all' />

           <input
           type='email'
           name='email'
           placeholder='Your email'
           value={formData.email}
           onChange={handleChange}
            className='bg-transparent border-b py-3 placeholder:text-white focus:border-accent 
          outline-none w-full transition-all' />
          <textarea
          name='message'
          placeholder='Your message'
          value={formData.message}
          onChange={handleChange}
           className='bg-transparent border-b py-12 placeholder:text-white focus:border-accent 
          outline-none w-full transition-all resize-none mb-12' >
             </textarea>
             <button
             type='submit'
              className='btn btn-lg'>Send Message</button>
          </motion.form>
      </div>

    </div>

  </section>;
};

export default Contact;
