import React from 'react';
import { motion } from 'framer-motion';
import home1 from '../../../public/images/Home-1.png';
import styles from './Homeslider.module.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Homeslider = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-start justify-center text-left p-8">
      <img
        src={home1}
        alt="Background"
        className="fixed inset-0 object-cover w-full h-full"
        style={{ zIndex: -1 }}
      />
      <div className="relative z-10 ml-56">
        <motion.h1
          className={styles.customh1}
          initial={{ x: '-50%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Push Limits
        </motion.h1>
        <motion.h2
          className={styles.customh2}
          initial={{ x: '-30%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Achieve Excellence
        </motion.h2>
        <motion.div
          initial={{ x: '-50%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        >
          <Link to={'/course'}>
          <Button className="button">
            Our Programs
          </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Homeslider;
