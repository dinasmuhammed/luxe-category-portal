import React from 'react';

const ProductSection = ({ category }) => {
  // Placeholder products (replace with actual data later)
  const products = [
    { id: 1, name: 'Product 1', price: '$99.99', image: 'https://source.unsplash.com/random/400x400/?perfume' },
    { id: 2, name: 'Product 2', price: '$129.99', image: 'https://source.unsplash.com/random/400x400/?fragrance' },
    { id: 3, name: 'Product 3', price: '$149.99', image: 'https://source.unsplash.com/random/400x400/?cologne' },
    { id: 4, name: 'Product 4', price: '$199.99', image: 'https://source.unsplash.com/random/400x400/?scent' },
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
