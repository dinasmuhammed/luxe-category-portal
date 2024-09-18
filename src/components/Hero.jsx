import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <img
        src="https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80"
        alt="Fajdiperfumes Luxury Fragrance"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair italic text-gold mb-4">
          Fajdiperfumes: Essence of Elegance
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8">
          Discover our exclusive fragrance collection
        </p>
        <button className="bg-gold text-black px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg font-semibold hover:bg-opacity-80 transition-colors duration-300">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
