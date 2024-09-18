import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <img
        src="/placeholder.svg"
        alt="Luxury Product"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-playfair italic text-gold mb-4">
          Experience the Elegance of Exclusivity
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Discover our premium collection
        </p>
        <button className="bg-gold text-black px-8 py-3 text-lg font-semibold hover:bg-opacity-80 transition-colors duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;