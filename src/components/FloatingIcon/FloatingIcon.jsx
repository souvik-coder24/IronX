import React from 'react';
import { GiGymBag } from "react-icons/gi";
import { Link } from 'react-router-dom';

const FloatingIcon = () => {
  return (
    <div className="fixed bottom-10 right-20 z-50">
        <Link to={'/Diet'}>
            <div className="bg-yellow-500 p-4 rounded-full transition-transform duration-500 ease-in-out transform hover:scale-95">
                <GiGymBag className="w-12 h-12 cursor-pointer text-white transition-transform duration-500 ease-in-out transform hover:scale-90"/>
            </div>
        </Link>
    </div>
  );
};

export default FloatingIcon;
