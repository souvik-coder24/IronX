import React from 'react';
import { FaDumbbell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Exercise', href: '/search' },
  { name: 'About', href: '/about' },
  { name: 'Courses', href: '/course' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' }
];

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 bg-transparent text-white p-4 shadow-md flex items-center justify-between z-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={'/'}>
          <div className="flex items-center space-x-3 cursor-pointer">
            <FaDumbbell className="text-5xl text-yellow-500" />
            <h1 className="text-3xl font-bold tracking-tight">
              Iron
              <span className="text-yellow-500 text-4xl">X</span>
            </h1>
          </div>
        </Link>
        <nav className="flex items-center gap-14">
          {navItems.map((item) => (
            <Link key={item.name} to={item.href}>
              <p className="hover:text-yellow-500 text-xl font-bold transition-colors duration-300">
                {item.name}
              </p>
            </Link>
          ))}
        </nav>
        <button
          className="bg-yellow-500 text-white text-xl border-2 border-white px-11 py-3 font-bold hover:bg-yellow-600 hover:text-gray-400 transition-colors duration-300"
        >
          Contact Me
        </button>
      </div>
    </header>
  );
};

export default Header;