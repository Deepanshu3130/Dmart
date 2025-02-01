import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const maxTitleLength = 30;
  const shortenedTitle = product.title.length > maxTitleLength
    ? product.title.substring(0, maxTitleLength) + "..."
    : product.title;
  return (
    
    
      <div className='sm:w-[292px] sm:max-w-[292px] w-full flex-1 flex flex-col gap-4 rounded-md border-2 border-primary hover:border-gray-300 p-3  relative group hover:scale-110 duration-300'>
        <div className="flex-1 relative flex flex-col gap-5 p-4 rounded-md">
        <img
          
          src={product.imgeUrl}
          alt={product.title}
          width={200}
          height={200}
          className="max-h-[200px] object-contain w-full h-full group-hover:scale-110 duration-700"
        />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-secondary text-xl leading-6  truncate text-primary font-bold">{shortenedTitle}</h3>

        <div className="flex justify-between">
          <p className="text-white font-bold text-lg capitalize">
            {"category"}
          </p>

          <p className="text-white text-lg font-semibold">
             
          ₹<span>{product.currentPrice}</span>
          </p>
        </div>
      </div>
      </div>
    
  );
};

export default ProductCard;
