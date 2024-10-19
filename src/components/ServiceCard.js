import React from 'react';

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg">Learn More</button>
    </div>
  );
};

export default ServiceCard;
