import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProduct } from '../services/productApi';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { FiSearch, FiSliders, FiGrid, FiFilter, FiTag } from 'react-icons/fi';

function ALLproducts() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [sortBy, setSortBy] = useState('default'); // 'default', 'price-low', 'price-high', 'discount'

  useEffect(() => {
    let isMounted = true;
    const fetchAll = async () => {
      setLoading(true);
      try {
        await getAllProduct(dispatch);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchAll();
    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  // Extract unique categories
  const categories = useMemo(() => {
    if (!products || !Array.isArray(products)) return ['ALL'];
    const set = new Set();
    products.forEach((p) => {
      if (p.category && typeof p.category === 'string' && p.category.trim() !== '') {
        set.add(p.category.trim());
      }
    });
    return ['ALL', ...Array.from(set)];
  }, [products]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    if (!products || !Array.isArray(products)) return [];

    let list = products.filter((p) => {
      const titleMatch = (p.title || '').toLowerCase().includes(searchQuery.toLowerCase());
      const catMatch =
        selectedCategory === 'ALL' ||
        (p.category && p.category.toLowerCase() === selectedCategory.toLowerCase());
      return titleMatch && catMatch;
    });

    if (sortBy === 'price-low') {
      list = [...list].sort((a, b) => {
        const pA = Number(String(a.currentPrice || 0).replace(/[^0-9.]/g, ''));
        const pB = Number(String(b.currentPrice || 0).replace(/[^0-9.]/g, ''));
        return pA - pB;
      });
    } else if (sortBy === 'price-high') {
      list = [...list].sort((a, b) => {
        const pA = Number(String(a.currentPrice || 0).replace(/[^0-9.]/g, ''));
        const pB = Number(String(b.currentPrice || 0).replace(/[^0-9.]/g, ''));
        return pB - pA;
      });
    } else if (sortBy === 'discount') {
      list = [...list].sort((a, b) => {
        const curA = Number(String(a.currentPrice || 0).replace(/[^0-9.]/g, ''));
        const origA = Number(String(a.originalPrice || 0).replace(/[^0-9.]/g, ''));
        const discA = origA > curA ? ((origA - curA) / origA) : 0;

        const curB = Number(String(b.currentPrice || 0).replace(/[^0-9.]/g, ''));
        const origB = Number(String(b.originalPrice || 0).replace(/[^0-9.]/g, ''));
        const discB = origB > curB ? ((origB - curB) / origB) : 0;
        return discB - discA;
      });
    }

    return list;
  }, [products, searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-[#0B0F19] pt-24 sm:pt-28 pb-20">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-2.5">
            <FiGrid className="w-4 h-4" />
            <span>Catalog Index</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Tracked Amazon Collection
          </h1>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            Browse through all currently tracked Amazon products, analyze historical price movements, and activate instant price drop alerts.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Controls Toolbar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl mb-8 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <FiSearch className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter products by title..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Category Filter */}
            {categories.length > 2 && (
              <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5">
                <FiTag className="w-3.5 h-3.5 text-slate-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-transparent text-xs text-slate-200 font-medium focus:outline-none cursor-pointer"
                  aria-label="Filter by category"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat} className="bg-slate-900 text-white">
                      {cat === 'ALL' ? 'All Categories' : cat}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Sort Select */}
            <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5">
              <FiFilter className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-xs text-slate-200 font-medium focus:outline-none cursor-pointer"
                aria-label="Sort products"
              >
                <option value="default" className="bg-slate-900 text-white">Sort: Default</option>
                <option value="price-low" className="bg-slate-900 text-white">Price: Low to High</option>
                <option value="price-high" className="bg-slate-900 text-white">Price: High to Low</option>
                <option value="discount" className="bg-slate-900 text-white">Highest Discount</option>
              </select>
            </div>

            {/* Total Count Badge */}
            <div className="px-3 py-2 rounded-xl bg-slate-800/80 text-xs font-semibold text-slate-300 border border-slate-700/60 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{filteredProducts.length} items</span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="rounded-xl bg-slate-900/60 border border-slate-800 p-4 animate-pulse h-80 flex flex-col justify-between">
                <div className="w-full h-44 bg-slate-800 rounded-lg" />
                <div className="space-y-2 mt-4">
                  <div className="h-4 bg-slate-800 rounded w-3/4" />
                  <div className="h-4 bg-slate-800 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
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
          <div className="text-center py-20 px-4 rounded-2xl bg-slate-900/40 border border-slate-800/80">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4 text-slate-400">
              <FiSliders className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">No matching products found</h3>
            <p className="text-slate-400 text-sm max-w-sm mx-auto mb-6">
              {searchQuery
                ? `No products matched "${searchQuery}". Try a different keyword.`
                : 'There are no products in the catalog yet.'}
            </p>
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('ALL');
                }}
                className="btn-outline px-4 py-2 text-xs font-semibold"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

export default ALLproducts;
