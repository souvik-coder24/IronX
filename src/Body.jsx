import React from 'react';
import { Homeslider, Training, Offer, Pricing, About } from './index';

const Body = () => {
  return (
    <div>
      <Homeslider />
      <Training />
      <Offer/>
      <Pricing/>
      <About/>
    </div>
  );
}

export default Body;