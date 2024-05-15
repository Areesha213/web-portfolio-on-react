import React, { useRef } from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {

  const contactRef = useRef(null);
  const workRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToWork = () => {
    if (workRef.current) {
      workRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header  scrollToContact={scrollToContact} />
      <Banner scrollToContact={scrollToContact}  scrollToWork={scrollToWork} />
      <Nav />
      <About scrollToContact={scrollToContact}  scrollToWork={scrollToWork} />
      <Services  scrollToWork={scrollToWork} />
      <Work ref={workRef} />
      <div ref={contactRef}>
        <Contact />
      </div>
      {/* <div className='h-[400px]'></div> */}
    </div>
  );
};

export default App;
