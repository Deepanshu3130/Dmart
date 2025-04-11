import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProduct } from '../services/productApi';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

function ALLproducts() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  const callgetProduct = async () => {
    await getAllProduct(dispatch);
  };

  useEffect(() => {
    callgetProduct();
  }, []);

  return (
    <div className='min-h-screen bg-gray-900 pb-16'>
      {/* Header */}
      <div className='container mx-auto px-4 py-12 text-center'>
        <h1 className='text-3xl font-bold text-white mb-2'>
          Explore Our Collection
        </h1>
        <p className='text-gray-400 mb-6'>
          Discover amazing products and track their prices for the best deals
        </p>
        <div className='w-20 h-0.5 bg-primary mx-auto'></div>
      </div>

      {/* Products Grid - More items per row */}
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
          {products.map((product, index) => (
            <Link 
              to={`/product/${product._id}`} 
              key={index}
              className='hover:scale-[1.02] transition-transform duration-200'
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>

      {products.length === 0 && (
        <div className='text-center py-20 text-gray-400'>
          No products available
        </div>
      )}
    </div>
  );
}

export default ALLproducts;