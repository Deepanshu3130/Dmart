import React from 'react';

const ProductCard = ({ product }) => {
  const maxTitleLength = 20; // Reduced for compactness
  const shortenedTitle = product.title.length > maxTitleLength
    ? product.title.substring(0, maxTitleLength) + "..."
    : product.title;

  return (
    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group w-full max-w-[240px] mx-auto'>
      {/* Product Image */}
      <div className='relative overflow-hidden h-48'>
        <img
          src={product.imgeUrl}
          alt={product.title}
          className='w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 p-2'
        />
        {/* Price Tag */}
        <div className='absolute bottom-2 right-2 bg-primary/90 text-black font-bold px-2 py-1 rounded-md text-xs'>
          ₹{product.currentPrice}
        </div>
      </div>

      {/* Product Info */}
      <div className='p-3'>
        <h3 className='text-white font-medium text-sm mb-1 line-clamp-2 h-10'>
          {product.title}
        </h3>
        
        <div className='flex justify-between items-center mt-2'>
          <span className='text-gray-400 text-xs capitalize'>
            {product.category || 'Uncategorized'}
          </span>
          
          {/* View Button */}
          <button className='text-primary hover:text-primary/80 text-xs font-medium transition-colors'>
            View →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;