import React from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      gsap.to(window, { duration: 1, scrollTo: { y: element, offsetY: 70 } });
    }
  };

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center py-4 px-6">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        <a href="#home" onClick={() => handleScroll('home')} className="text-gray-700 hover:text-gray-900">Home</a>
        <a href="#how-it-works" onClick={() => handleScroll('how-it-works')} className="text-gray-700 hover:text-gray-900">How It Works</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Services</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Blog</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">About Us</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
      </div>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <button className="bg-green-100 text-green-800 px-4 py-2 rounded-md">Login</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md">Book Demo</button>
      </div>
    </nav>
  );
};

export default Navbar;