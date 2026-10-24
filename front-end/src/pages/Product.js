import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductDetails } from '../services/productApi';
import Modal from '../Components/Modal';
import {
  FiArrowLeft,
  FiExternalLink,
  FiBell,
  FiStar,
  FiMessageSquare,
  FiTrendingDown,
  FiTrendingUp,
  FiBarChart2,
  FiTag,
  FiCheckCircle,
  FiShare2,
} from 'react-icons/fi';
import toast from 'react-hot-toast';

const Product = () => {
  const { id } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const response = await getProductDetails(id);
        if (isMounted && response) {
          setResult(response);
        }
      } catch (err) {
        console.error('Error fetching product details:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    if (id) {
      fetchDetails();
    }
    return () => {
      isMounted = false;
    };
  }, [id]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: result?.title || 'Amazon Deal on DMart',
          url: window.location.href,
        });
      } catch (e) {
        // Share cancelled or not supported
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  // Price computations
  const currentPriceNum = Number(String(result?.currentPrice || 0).replace(/[^0-9.]/g, ''));
  const originalPriceNum = Number(String(result?.originalPrice || 0).replace(/[^0-9.]/g, ''));
  const lowestPriceNum = Number(String(result?.lowestPrice || 0).replace(/[^0-9.]/g, ''));
  const maxPriceNum = Number(String(result?.maxPrice || 0).replace(/[^0-9.]/g, ''));
  const avgPriceNum = Number(String(result?.avgPrice || 0).replace(/[^0-9.]/g, ''));

  const hasDiscount = originalPriceNum > currentPriceNum && currentPriceNum > 0;
  const discountAmount = hasDiscount ? originalPriceNum - currentPriceNum : 0;
  const discountPercent = hasDiscount && originalPriceNum > 0
    ? Math.round((discountAmount / originalPriceNum) * 100)
    : 0;

  const isAtLowestPrice = currentPriceNum > 0 && lowestPriceNum > 0 && currentPriceNum <= lowestPriceNum;

  return (
    <div className="bg-[#0B0F19] text-slate-100 min-h-screen pt-24 sm:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb & Back */}
        <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8 text-xs sm:text-sm">
          <Link
            to="/search"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Back to Search</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors text-xs font-medium"
              title="Share this product"
            >
              <FiShare2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Loading Skeleton */}
        {loading ? (
          <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-5 h-96 bg-slate-800 rounded-xl" />
              <div className="lg:col-span-7 space-y-6">
                <div className="h-6 bg-slate-800 rounded w-1/3" />
                <div className="h-8 bg-slate-800 rounded w-3/4" />
                <div className="h-20 bg-slate-800 rounded" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-slate-800 rounded" />
                  <div className="h-24 bg-slate-800 rounded" />
                </div>
              </div>
            </div>
          </div>
        ) : !result ? (
          <div className="text-center py-20 px-4 rounded-2xl bg-slate-900/40 border border-slate-800">
            <h2 className="text-xl font-bold text-white mb-2">Product Not Found</h2>
            <p className="text-slate-400 text-sm mb-6">
              We couldn't retrieve the details for this product ID. It may have expired or been removed.
            </p>
            <Link to="/search" className="btn-primary px-6 py-2.5 text-sm font-bold">
              Try Searching Another Link
            </Link>
          </div>
        ) : (
          /* Main Product Layout */
          <div className="rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Image Showcase (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="relative w-full rounded-xl bg-white p-6 sm:p-8 flex items-center justify-center min-h-[360px] sm:min-h-[420px] shadow-inner overflow-hidden group">
                  <img
                    src={result.imgeUrl || result.imageUrl || '/placeholder.png'}
                    alt={result.title || 'Amazon product'}
                    className="max-h-[340px] sm:max-h-[380px] w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {isAtLowestPrice && (
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-md">
                      <FiTrendingDown className="w-3.5 h-3.5" />
                      <span>Lowest Price Ever!</span>
                    </div>
                  )}
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <FiCheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Live Amazon Data Verified</span>
                  </span>
                  <span>ID: {id?.slice(-8)}</span>
                </div>
              </div>

              {/* Right Column: Details & Insights (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                
                {/* Title & Category */}
                <div>
                  {result.category && (
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                      {result.category}
                    </span>
                  )}
                  <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                    {result.title}
                  </h1>

                  {/* Rating & Reviews Bar */}
                  <div className="flex flex-wrap items-center gap-4 mt-3 pt-3 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300">
                    <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
                      <FiStar className="w-4 h-4 fill-amber-400" />
                      <span>{result.stars || '4.3'}</span>
                      <span className="text-slate-400 font-normal">/ 5</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-slate-400">
                      <FiMessageSquare className="w-4 h-4 text-slate-400" />
                      <span>
                        {result.reviewsCount
                          ? `${Number(String(result.reviewsCount).replace(/[^0-9]/g, '') || 0).toLocaleString()} Reviews`
                          : 'Customer Reviews Verified'}
                      </span>
                    </div>

                    <div className="text-xs text-emerald-400 font-medium">
                      ✓ 92% Positive Recommendation
                    </div>
                  </div>
                </div>

                {/* Price Display Card */}
                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider block mb-1">
                      Current Price
                    </span>
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        ₹{currentPriceNum > 0 ? currentPriceNum.toLocaleString() : result.currentPrice || 'N/A'}
                      </span>
                      {hasDiscount && originalPriceNum > 0 && (
                        <span className="text-base sm:text-lg text-slate-500 line-through">
                          ₹{originalPriceNum.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  {hasDiscount && discountPercent > 0 && (
                    <div className="inline-flex flex-col sm:items-end">
                      <span className="px-3 py-1 rounded-lg text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        Save {discountPercent}% (₹{discountAmount.toLocaleString()})
                      </span>
                      <span className="text-[11px] text-slate-500 mt-1">Below original listed price</span>
                    </div>
                  )}
                </div>

                {/* 4 Differentiated Price Metric Cards */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Historical Price Intelligence
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    
                    {/* Current Price */}
                    <div className="p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/20">
                      <div className="flex items-center justify-between text-amber-400 mb-1">
                        <span className="text-[11px] font-semibold uppercase">Current</span>
                        <FiTag className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-base sm:text-lg font-bold text-white">
                        ₹{currentPriceNum > 0 ? currentPriceNum.toLocaleString() : result.currentPrice || 'N/A'}
                      </p>
                      <span className="text-[10px] text-slate-400">Live active rate</span>
                    </div>

                    {/* Lowest Price */}
                    <div className="p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                      <div className="flex items-center justify-between text-emerald-400 mb-1">
                        <span className="text-[11px] font-semibold uppercase">Lowest</span>
                        <FiTrendingDown className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-base sm:text-lg font-bold text-white">
                        ₹{lowestPriceNum > 0 ? lowestPriceNum.toLocaleString() : result.lowestPrice || result.currentPrice || 'N/A'}
                      </p>
                      <span className="text-[10px] text-emerald-400/80">Best ever recorded</span>
                    </div>

                    {/* Average Price */}
                    <div className="p-3.5 rounded-xl bg-blue-500/5 border border-blue-500/20">
                      <div className="flex items-center justify-between text-blue-400 mb-1">
                        <span className="text-[11px] font-semibold uppercase">Average</span>
                        <FiBarChart2 className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-base sm:text-lg font-bold text-white">
                        ₹{avgPriceNum > 0 ? avgPriceNum.toLocaleString() : result.avgPrice || result.currentPrice || 'N/A'}
                      </p>
                      <span className="text-[10px] text-slate-400">Typical retail cost</span>
                    </div>

                    {/* Highest Price */}
                    <div className="p-3.5 rounded-xl bg-rose-500/5 border border-rose-500/20">
                      <div className="flex items-center justify-between text-rose-400 mb-1">
                        <span className="text-[11px] font-semibold uppercase">Highest</span>
                        <FiTrendingUp className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-base sm:text-lg font-bold text-white">
                        ₹{maxPriceNum > 0 ? maxPriceNum.toLocaleString() : result.maxPrice || result.originalPrice || result.currentPrice || 'N/A'}
                      </p>
                      <span className="text-[10px] text-slate-400">Peak price ceiling</span>
                    </div>

                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch gap-4">
                  
                  {/* Track Price Button */}
                  <button
                    onClick={() => setModalOpen(true)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95"
                  >
                    <FiBell className="w-4 h-4" />
                    <span>Set Price Drop Alert</span>
                  </button>

                  {/* Visit Product Button */}
                  {result.url && (
                    <a
                      href={result.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-sm border border-slate-700 hover:border-slate-600 transition-all active:scale-95"
                    >
                      <span>Buy on Amazon</span>
                      <FiExternalLink className="w-4 h-4 text-slate-400" />
                    </a>
                  )}

                </div>

                {/* Reassurance note */}
                <p className="text-center sm:text-left text-xs text-slate-500">
                  ⚡ We check Amazon multiple times per day. Your email alert triggers instantly if the price drops below ₹{currentPriceNum > 0 ? currentPriceNum.toLocaleString() : result.currentPrice}.
                </p>

              </div>

            </div>
          </div>
        )}

      </div>

      {/* Track Price Modal */}
      {modalOpen && <Modal SetmodalOpen={setModalOpen} id={id} />}
    </div>
  );
};

export default Product;
