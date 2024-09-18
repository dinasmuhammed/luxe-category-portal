import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-gold py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Perfumes</a></li>
            <li><a href="#" className="hover:underline">Clothing</a></li>
            <li><a href="#" className="hover:underline">Shoes</a></li>
            <li><a href="#" className="hover:underline">Accessories</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Our Story</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="mb-4">Subscribe to receive updates on new collections and exclusive offers.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-800 text-white px-4 py-2 flex-grow"
            />
            <button className="bg-gold text-black px-4 py-2 hover:bg-opacity-80 transition-colors duration-300">
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4 mt-6">
            <Facebook className="w-6 h-6 cursor-pointer" />
            <Instagram className="w-6 h-6 cursor-pointer" />
            <Twitter className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        &copy; 2024 Luxury Brand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;