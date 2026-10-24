import React, { useState, useEffect } from 'react';
import { getRecentProduct } from '../services/productApi';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { FiClock, FiArrowRight } from 'react-icons/fi';

function RecentlySearch() {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchRecent = async () => {
      try {
        const data = await getRecentProduct();
        if (isMounted && Array.isArray(data)) {
          setResponse(data);
        }
      } catch (error) {
        console.error('Error fetching recent products:', error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchRecent();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="bg-[#0B0F19] py-14 sm:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-5 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-1.5">
              <FiClock className="w-4 h-4" />
              <span>Fresh Price Lookups</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
              Recently Searched Products
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Latest items queried through the Dmart scraping engine.
            </p>
          </div>

          <Link
            to="/allCollection"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-400 transition-colors group"
          >
            <span>Browse Full Library</span>
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Content State */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-xl bg-slate-900/60 border border-slate-800 p-4 animate-pulse h-80 flex flex-col justify-between">
                <div className="w-full h-44 bg-slate-800 rounded-lg" />
                <div className="space-y-2 mt-4">
                  <div className="h-4 bg-slate-800 rounded w-3/4" />
                  <div className="h-4 bg-slate-800 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : response && response.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {response.map((product, index) => (
              <Link
                to={`/product/${product._id}`}
                key={product._id || index}
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
              >
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 px-4 rounded-2xl bg-slate-900/40 border border-slate-800/60">
            <p className="text-slate-400 text-sm">No recently searched products found.</p>
          </div>
        )}

      </div>
    </section>
  );
}

export default RecentlySearch;
