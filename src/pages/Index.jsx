import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-gold">
      <Header />
      <main>
        <Hero />
        <ProductSection category="Perfumes" />
        <ProductSection category="Clothing" />
        <ProductSection category="Shoes" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
