import React from 'react';
//icons
import { BsArrowUpRight } from 'react-icons/bs'

//motion
import { motion } from 'framer-motion'
//variants
import { fadeIn } from '../variants'

//service data

const services = [
  {
    name: "HTML,CSS,JavaScript",
    description: "Bootstrap, Tailwind CSS , Jquery",
    link: "learn more"
  },
  {
    name: " React",
    description: "see my work",
    link: "learn more"
  },
  {
    name: "NodeJs , Express",
    description: "see my work",
    link: "learn more"
  }
]

const Services = ({ scrollToWork }) => {
  return <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text & image*/}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 lg:bg-services lg:bg-bottom  bg-no-repeat mix-blend-lighten mb-12 *
        lg:mb-0'>
          <h2 className='h2 text-accent mb-6'>Skills</h2>
          <p className=' max-w-[455px] mb-6'>Experienced in HTML, CSS, JavaScript, React, Bootstrap, jQuery, Tailwind CSS, Node.js, and Express. I specialize in crafting modern, responsive websites and dynamic web applications. Passionate about creating user-friendly interfaces and robust backend solutions. Dedicated to staying updated with the latest technologies to deliver high-quality web experiences.
          </p>
          <button className='btn btn-sm' onClick={scrollToWork}> See my Work</button>
        </motion.div>
        {/* serivces */}
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'>
          {/* services list */}
          <div>
            {services.map((service, index) => {
              //destructure service
              const { name, description, link } = service;
              return (
                <>
                  <div className='border-b border-white/20 h-[145px] mb-[36px]
                flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary
                     font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-1 flex-col items-end'>
                      <a href='#' className='btn w-9 h-9 mb-[42px]
                    flex justify-center items-center'><BsArrowUpRight /></a>
                      <a href='#' className='text-gradient text-sm'>{link}</a>
                    </div>
                  </div>
                </>

              )
            })}
          </div>
        </motion.div>
      </div>

    </div>
  </section>;
};

export default Services;
