import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-blue-500 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="ml-2 text-2xl font-bold text-white">ConferaFlow</span>
        </div>
        <nav className="space-x-8">
          <a href="#services" className="text-white">Services</a>
          <a href="#about" className="text-white">About us</a>
          <a href="#conferences" className="text-white">For conferences</a>
          <a href="#contact" className="text-white">Contact</a>
        </nav>
        <button className="bg-green-500 text-white py-2 px-4 rounded-lg">Login</button>
      </div>
    </header>
  );
};

export default Navbar;
