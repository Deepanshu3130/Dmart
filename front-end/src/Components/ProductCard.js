import React from 'react';
import { FiArrowUpRight, FiStar } from 'react-icons/fi';

const ProductCard = ({ product }) => {
  if (!product) return null;

  const currentPriceNum = Number(String(product.currentPrice || 0).replace(/[^0-9.]/g, ''));
  const originalPriceNum = Number(String(product.originalPrice || 0).replace(/[^0-9.]/g, ''));
  
  const hasDiscount = originalPriceNum > currentPriceNum && currentPriceNum > 0;
  const discountPercent = hasDiscount
    ? Math.round(((originalPriceNum - currentPriceNum) / originalPriceNum) * 100)
    : 0;

  return (
    <div className="group relative flex flex-col h-full w-full rounded-xl bg-slate-900/90 border border-slate-800 hover:border-primary/50 transition-all duration-200 overflow-hidden hover:shadow-card-hover hover:-translate-y-1">
      
      {/* Product Image Stage */}
      <div className="relative w-full pt-[85%] bg-white overflow-hidden flex items-center justify-center">
        <img
          src={product.imgeUrl || product.imageUrl || '/placeholder.png'}
          alt={product.title || 'Amazon product'}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />

        {/* Discount Badge */}
        {hasDiscount && discountPercent > 0 && (
          <div className="absolute top-2.5 left-2.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold bg-emerald-600 text-white shadow-sm">
            <span>{discountPercent}% OFF</span>
          </div>
        )}

        {/* Category Pill */}
        {product.category && (
          <div className="absolute top-2.5 right-2.5 max-w-[120px] truncate px-2 py-0.5 rounded text-[10px] font-medium bg-slate-900/80 backdrop-blur-sm text-slate-300 border border-slate-700/50">
            {product.category}
          </div>
        )}
      </div>

      {/* Product Meta */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-1.5 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1 text-amber-400 font-semibold">
              <FiStar className="w-3.5 h-3.5 fill-amber-400" />
              <span>{product.stars || '4.2'}</span>
            </span>
            {product.reviewsCount ? (
              <span className="text-slate-500">
                ({typeof product.reviewsCount === 'number' ? product.reviewsCount.toLocaleString() : product.reviewsCount})
              </span>
            ) : null}
          </div>

          {/* Title */}
          <h3 
            className="text-sm font-semibold text-slate-100 group-hover:text-primary transition-colors line-clamp-2 leading-snug"
            title={product.title}
          >
            {product.title || 'Untitled Product'}
          </h3>
        </div>

        {/* Price & Action Footer */}
        <div className="pt-2 border-t border-slate-800/80 flex items-end justify-between gap-2">
          <div className="flex flex-col">
            {hasDiscount && originalPriceNum > 0 && (
              <span className="text-xs text-slate-500 line-through">
                ₹{originalPriceNum.toLocaleString()}
              </span>
            )}
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold text-white tracking-tight">
                ₹{currentPriceNum > 0 ? currentPriceNum.toLocaleString() : product.currentPrice || 'N/A'}
              </span>
            </div>
          </div>

          <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-primary group-hover:translate-x-0.5 transition-transform">
            <span>Track</span>
            <FiArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
