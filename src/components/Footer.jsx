import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-gold py-8 sm:py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li><a href="#" className="hover:underline">Perfumes</a></li>
            <li><a href="#" className="hover:underline">Fragrances</a></li>
            <li><a href="#" className="hover:underline">Gift Sets</a></li>
            <li><a href="#" className="hover:underline">Accessories</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">About Us</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li><a href="#" className="hover:underline">Our Story</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Newsletter</h3>
          <p className="mb-4 text-sm sm:text-base">Subscribe to receive updates on new Fajdiperfumes collections and exclusive offers.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-800 text-white px-3 py-2 text-sm sm:text-base flex-grow"
            />
            <button className="bg-gold text-black px-3 py-2 text-sm sm:text-base hover:bg-opacity-80 transition-colors duration-300">
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4 mt-6">
            <Facebook className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
            <Twitter className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs sm:text-sm">
        &copy; 2024 Fajdiperfumes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
