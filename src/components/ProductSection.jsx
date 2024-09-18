import React from 'react';

const ProductSection = ({ category }) => {
  // Realistic product data with specific Unsplash images
  const products = [
    { id: 1, name: 'Ethereal Essence', price: '$299.99', image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80' },
    { id: 2, name: 'Opulent Orchid', price: '$259.99', image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80' },
    { id: 3, name: 'Velvet Noir', price: '$329.99', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80' },
    { id: 4, name: 'Golden Aura', price: '$279.99', image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80' },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-playfair italic text-gold mb-8 text-center">
          {category}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-black p-4 border border-gold rounded-lg transition-transform duration-300 hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-gold mb-2">{product.name}</h3>
              <p className="text-gray-300">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
