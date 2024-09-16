import React, { useEffect } from 'react';
import { Homeslider, Training, Offer, Pricing, About, Gallery } from './index';
import FloatingIcon from './components/FloatingIcon/FloatingIcon';
import AOS from 'aos';

const Body = () => {

  useEffect(() => {
    AOS.init({
      duration: 1600,
      once: true,
    });
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Homeslider />
      <Training />
      <Offer />
      <Gallery />
      <Pricing />
      <About />
      <FloatingIcon />
    </div>
  );
};

export default Body;