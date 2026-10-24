import React, { useEffect, useState } from 'react';
import { getMostTrackedProduct } from '../services/productApi';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { FiBell, FiArrowRight } from 'react-icons/fi';

function MostTracked() {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchTracked = async () => {
      try {
        const data = await getMostTrackedProduct();
        if (isMounted && Array.isArray(data)) {
          setResponse(data);
        }
      } catch (error) {
        console.error('Error fetching most tracked products:', error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchTracked();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="bg-[#0B0F19] py-16 sm:py-24 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-2">
              <FiBell className="w-4 h-4" />
              <span>Community Favorites</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
              Most Tracked Deals
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Products with the highest number of active price alerts.
            </p>
          </div>

          <Link
            to="/allCollection"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-400 transition-colors group"
          >
            <span>View All Tracked Deals</span>
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
            <p className="text-slate-400 text-sm">No tracked products found yet. Start tracking items to populate this list!</p>
          </div>
        )}

        {/* Bottom CTA */}
        {response && response.length > 0 && (
          <div className="mt-12 text-center">
            <Link
              to="/allCollection"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700/60 transition-all hover:border-slate-500"
            >
              <span>Explore All Products</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}

export default MostTracked;
