import React from 'react';
//count up
import CountUp from 'react-countup';
//intersection observer hook
import { useInView } from 'react-intersection-observer'
//motion
import { motion } from 'framer-motion'
//variants
import { fadeIn } from '../variants'



const About = ({ scrollToContact, scrollToWork  }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })


  return <section className='section' id='about' ref={ref}>
    <div className='container  mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center 
      lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* img */}
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false , amount: 0.3}}

         className='flex-1 bg-about bg-contain bg-no-repeat h-[640px]
         mix-blend-lighten bg-top'></motion.div>
        {/* text */}
        <motion.div
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false , amount: 0.3}}
        className='flex-1'>
          <h2 className='h2 text-accent'>About Me</h2>
          <h3 className='h3 mb-4'>I am Areesha</h3>
          <p className='mb-6'>As a passionate web developer, I specialize in crafting engaging and dynamic websites that leave a lasting impression. With a keen eye for design and a knack for problem-solving, I thrive on turning ideas into beautifully functional websites. Whether it's building responsive layouts, implementing interactive features, or optimizing performance, I am committed to delivering high-quality solutions that exceed expectations. Let's collaborate to bring your digital vision to life!

</p>
          {/* states */}
          {/* <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
            <div className='text-[40px] font-tertiary text-gradient
            mb-2'>
             {inView ? 
             <CountUp start={0} end={13} duration={3} /> : null }
            </div>
            <div className='font-primary text-sm tracking-[2px]'> Years of <br /> Experience</div>
            </div>
            <div>
            <div className='text-[40px] font-tertiary text-gradient
            mb-2'>
             {inView ? 
             <CountUp start={0} end={13} duration={3} /> : null }K+
            </div>
            <div className='font-primary text-sm tracking-[2px]'> Projects <br /> completed</div>
            </div>
            <div>
            <div className='text-[40px] font-tertiary text-gradient
            mb-2'>
             {inView ? 
             <CountUp start={0} end={13} duration={3} /> : null }
            </div>
            <div className='font-primary text-sm tracking-[2px]'> Years of <br /> Experience</div>
            </div>
            
          </div> */}

          <div className='flex gap-x-8 items-center'>
           <button className='btn btn-lg' onClick={scrollToContact}>Contact Me</button> 
            <a href='#' className='text-gradient btn-link' onClick={scrollToWork}>
              My portfolio
            </a>
          </div>
        </motion.div>
      </div>

    </div>

  </section>;
};

export default About;
