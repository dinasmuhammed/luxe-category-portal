import React, { useState } from 'react';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = ['Home', 'Fragrances', 'Collections', 'About Us', 'Contact'];

  return (
    <header className="sticky top-0 bg-black text-gold p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl sm:text-2xl font-playfair italic">Fajdiperfumes</div>
        <nav className="hidden md:flex space-x-4 lg:space-x-6">
          {menuItems.map((item) => (
            <a key={item} href="#" className="text-sm lg:text-base hover:text-gold hover:underline transition-colors duration-300">
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
          <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
          <div className="md:hidden">
            {isMenuOpen ? (
              <X onClick={toggleMenu} className="w-6 h-6 cursor-pointer" />
            ) : (
              <Menu onClick={toggleMenu} className="w-6 h-6 cursor-pointer" />
            )}
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black p-4">
          {menuItems.map((item) => (
            <a key={item} href="#" className="block py-2 text-sm hover:text-gold hover:underline transition-colors duration-300">
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
