import React from 'react';
// import icons
import { BiBriefcase, BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText } from 'react-icons/bs'


//link
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <>
      <nav className='fixed bottom-2 lg bottom-8 w-full overflow-hidden z-50'>
        <div className='conatiner mx-auto'>
          {/* nav inner */}
          <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl
        rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50 '>
            <Link to='home'
              activeClass='active'
              smooth={true}
              spy={true}
              offset={-200}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-content '>
              <BiHomeAlt />
            </Link>
            <Link to='about'
              activeClass='active'
              smooth={true}
              spy={true}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-content'>
              <BiUser />
            </Link>
            <Link to='services'
              activeClass='active'
              smooth={true}
              spy={true}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-content'>
              <BsClipboardData />
            </Link>
            <Link to='work'
              activeClass='active'
              smooth={true}
              spy={true}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-content'>
              <BsBriefcase />
            </Link>
            <Link to='contact'
              activeClass='active'
              smooth={true}
              spy={true}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-content'>
              <BsChatSquareText />
            </Link>

          </div>

        </div>

      </nav>
    </>
  );
};

export default Nav;
