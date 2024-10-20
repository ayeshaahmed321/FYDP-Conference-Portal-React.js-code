// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <a href="#" className="text-white hover:underline mx-4">Privacy Policy</a>
          <a href="#" className="text-white hover:underline mx-4">Terms of Service</a>
          <a href="#" className="text-white hover:underline mx-4">Contact Us</a>
        </div>
        <p>&copy; 2024 ConferaFlow. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
