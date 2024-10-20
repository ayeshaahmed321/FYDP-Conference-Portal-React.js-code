import React from 'react';
import ServiceCard from '../ServiceCard';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-500 h-screen flex flex-col justify-center text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Managing conferences just got a whole lot easier!</h1>
        <p className="text-xl mb-8">We’re the VIP pass to your event’s success!</p>
        <div className="space-x-4">
          <button className="bg-yellow-400 text-black py-2 px-4 rounded-md">Request a demo</button>
          <button className="bg-yellow-400 text-black py-2 px-4 rounded-md">Contact sales</button>
          <button className="bg-yellow-400 text-black py-2 px-4 rounded-md">General Questions</button>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-4xl font-semibold text-center mb-8">Services We Provide</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Conference Management" 
            description="From managing program committees to publishing proceedings, our system has you covered." 
          />
          <ServiceCard 
            title="Registration" 
            description="We can create complex registration forms to support your attendee registration." 
          />
          <ServiceCard 
            title="Publishing" 
            description="Our publishing services range from computer to health sciences to legal fields." 
          />
          <ServiceCard 
            title="Smart CFP" 
            description="With Smart CFP, you can publish your conference call for submissions quickly and easily." 
          />
          <ServiceCard 
            title="Smart Slide" 
            description="Our Smart Slide platform allows authors to publish and share slides before or after the conference." 
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
