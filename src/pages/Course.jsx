import React from 'react';
import { Training, Offer } from '../index';
import AOS from 'aos';

const Course = () => {

  React.useEffect(() => {
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
      <Offer />
      <Training />
    </div>
  );
}

export default Course;