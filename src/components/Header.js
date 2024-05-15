import React from 'react';
//images
import Logo from '../assets/logo1.svg'

const Header = ({ scrollToContact }) => {
  return <header className=' py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* Logo */}
        <a href='#' >
          < img className='w-30 h-20' src={Logo} alt='logo' />
        </a>
        {/* buttons */}
        <a href='#'></a>
        <buttons className='btn btn-sm text-center p-3'onClick={scrollToContact} >Work with Me </buttons>
      </div>

    </div>
    
    </header>;
};

export default Header;
