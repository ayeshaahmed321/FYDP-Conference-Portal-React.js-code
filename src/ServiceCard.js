import React from 'react';

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg text-center">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <a href="#" className="text-blue-500">Learn more</a>
    </div>
  );
};

export default ServiceCard;
