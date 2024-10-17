// src/pages/Homepage.js

import React from 'react';

const Homepage = () => {
    return (
        <div className="relative w-full bg-white" style={{ height: '3741px' }}>
            {/* Header */}
            <header className="absolute w-full h-[176px] bg-[#7A83CC] top-[3565px]"></header>

            {/* Main Content */}
            <div className="absolute w-full h-[293px] bg-[#686D9D] top-[3272px]"></div>

            <div className="absolute w-full h-[109px] bg-[#F3EEEA] border border-black top-0 flex items-center justify-between px-6">
                <h1 className="text-2xl font-semibold">ConferaFlow</h1>
                <button className="bg-[#7A83CC] rounded-lg h-10 w-40 text-white">Login</button>
            </div>

            {/* Services Section */}
            <section className="absolute w-full h-[582px] bg-gray-300 top-[105px]"></section>

            {/* Call to Action */}
            <div className="absolute w-full h-[230px] bg-[#EBE3D5] top-[685px] flex flex-col items-center justify-center">
                <h2 className="text-4xl font-bold">Services We Provide</h2>
                <div className="flex space-x-6 mt-4">
                    <button className="bg-[#FFE351] rounded-lg h-12 w-48">Request a Demo</button>
                    <button className="bg-[#FFE351] rounded-lg h-12 w-48">Contact Sales</button>
                    <button className="bg-[#FFE351] rounded-lg h-12 w-48">General Questions</button>
                </div>
            </div>

            {/* Footer */}
            <footer className="absolute w-full h-[72px] bg-gray-800 text-white flex items-center justify-center" style={{ top: '3646px' }}>
                <p className="font-semibold text-base">Copyright © 2024-2025 ConferaFlow</p>
            </footer>

            {/* Other sections can be added here based on the provided CSS */}
        </div>
    );
};

export default Homepage;
