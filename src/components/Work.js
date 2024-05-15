import React from 'react';
//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants'
//img
import Img1 from '../assets/home 1.JPG'
import Img2 from '../assets/4.JPG'
import Img3 from '../assets/5.JPG'


const Work = () => {
  return <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div
         variants={fadeIn('right', 0.3)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false , amount: 0.3}}
         className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/* text */}
          <div>
            <h2 className='h2 leading-tight text-accent'>
              My Latest <br/>Work
            </h2>
            <p className='max-w-sm mb-16'>loremanijanfisanbcka</p>
            <button className='btn btn-am'>View all Projects</button>
          </div>
          {/* img */}
          <div className='group relative overflow-hidden
          border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full
            absolute z-40 transition-all duration-300'></div>
            <div>
              {/* img */}
              <img className='group-hover:scale-125
              transition-all duration-500' src={Img1} alt='img'/>
              {/* pretitile */}
              <div className='absolute -bottom-full left-12
              group-hover:bottom-24 transition-all duration-500 z-50'>
                <spnan className='text-gradient'>project 1</spnan>
                </div>
              {/* title */}
              <div className='absolute -bottom-full left-12
              group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>E-commerce webiste</span>
              </div>
            </div>
            </div>
        </motion.div>
        <motion.div
        variants={fadeIn('left', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false , amount: 0.3}}
         className='flex-1 flex flex-col gap-y-10'>
           {/*image  */}
           <div className='flex-1'>
           {/*image  */}
           <div className='group relative overflow-hidden
          border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full
            absolute z-40 transition-all duration-300'></div>
            <div>
              {/* img */}
              <img className='group-hover:scale-125
              transition-all duration-500' src={Img2} alt='img'/>
              {/* pretitile */}
              <div className='absolute -bottom-full left-12
              group-hover:bottom-24 transition-all duration-500 z-50'>
                <spnan className='text-gradient'>project 2</spnan>
                </div>
              {/* title */}
              <div className='absolute -bottom-full left-12
              group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Recipe Application</span>
              </div>
            </div>
            </div>
        </div>
        <div className='flex-1'>
           {/*image  */}
           <div className='group relative overflow-hidden
          border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full
            absolute z-40 transition-all duration-300'></div>
            <div>
              {/* img */}
              <img className='group-hover:scale-125
              transition-all duration-500' src={Img3} alt='img'/>
              {/* pretitile */}
              <div className='absolute -bottom-full left-12
              group-hover:bottom-24 transition-all duration-500 z-50'>
                <spnan className='text-gradient'>project 3</spnan>
                </div>
              {/* title */}
              <div className='absolute -bottom-full left-12
              group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Wwather Application</span>
              </div>
            </div>
            </div>
        </div>
        </motion.div>
        
      </div>

    </div>
    </section>;
};

export default Work;
