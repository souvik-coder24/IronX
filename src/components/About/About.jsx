import React from 'react';
import aboutImg from '../../assets/images/about.png';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-black min-h-screen py-16 px-4">
      <div 
        className="flex flex-col md:flex-row justify-center items-center gap-8 mt-40"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <img 
          src={aboutImg} 
          alt="About IronX" 
          className="w-full md:w-2/3 lg:w-1/2 xl:w-2/4 rounded-lg"
          data-aos="zoom-in"
          data-aos-duration="1000"
        />
        <div 
          className="flex flex-col max-w-lg text-center md:text-left"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <h1 className="text-white text-6xl font-bold mb-6 font-[Oswald]">About Us</h1>
          <p className="text-white text-lg leading-relaxed">
            Welcome to IronX, where your fitness journey turns into a powerful transformation. At IronX, we’re dedicated to pushing limits, breaking barriers, and forging strength—both physical and mental. Our mission is to empower you to reach your full potential through expert guidance, state-of-the-art equipment, and a supportive community. We offer a range of programs designed to challenge you and help you achieve your fitness goals. Whether you're just starting out or looking to elevate your performance, IronX provides the motivation and tools you need to succeed. Join us and experience a gym that truly invests in your growth and well-being.
          </p>
          <div className="mt-6">
            <Link to={'/course'}>
            <Button>Our Programs</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
