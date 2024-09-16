import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import styles from './Gallery.module.css'

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="mx-auto px-5 py-2 lg:pt-24 bg-black">
       <h1
        className={styles.customHeading}
        data-aos="fade-down"
      >
        Gallery
      </h1>
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/compress-strong-man-training-gym-min-scaled.jpg?fit=2560%2C1707&ssl=1"
              data-aos="fade-up"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://cdn.shopify.com/s/files/1/0141/5242/t/16/assets/fitsix-4-bright_LIQo.jpg?v=162012172235"
              data-aos="fade-up"
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://plus.unsplash.com/premium_photo-1663050901483-ee8703cc8372?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D"
              data-aos="fade-up"
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://www.gymleco.com/wp-content/uploads/2022/09/hur-du-bygger-framgangsrikt-gym.jpg"
              data-aos="fade-up"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://media.istockphoto.com/id/2027278405/photo/young-sportswoman-having-weight-training-with-barbell-in-a-gym.webp?b=1&s=612x612&w=0&k=20&c=f__kcCWmZ9E5t_jikSWyLdgWBBJnwaDqL_XMs5gwaZw="
              data-aos="fade-up"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://media.istockphoto.com/id/2075354173/photo/fitness-couple-is-doing-kettlebell-twist-in-a-gym-togehter.webp?b=1&s=612x612&w=0&k=20&c=IZdQ2FGQgunLn-1PlfEq8M_Nj59cAgQeTPyAV7Jytrs="
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;