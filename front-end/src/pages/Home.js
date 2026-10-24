import React, { useState } from 'react';
import hero1 from '../assets/imges/hero-1.svg';
import { scrapeProduct } from '../services/productApi';
import { useNavigate } from 'react-router-dom';
import MostSearched from '../Components/MostSearched';
import RecentlySearch from '../Components/RecentlySearch';
import { FiLink, FiSearch, FiArrowRight, FiShield, FiCheckCircle, FiCopy, FiX } from 'react-icons/fi';
import toast from 'react-hot-toast';

function Home() {
  const [productLink, setProductLink] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const trimmed = productLink.trim();
    if (!trimmed) {
      toast.error('Please enter a valid Amazon product URL');
      return;
    }

    setLoading(true);
    try {
      const result = await scrapeProduct(trimmed, navigate);
      if (!result) {
        throw new Error('Could not find the product');
      }
    } catch (error) {
      console.error('Failed to scrape the product:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePaste = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.readText) {
        const text = await navigator.clipboard.readText();
        if (text) {
          setProductLink(text);
          toast.success('Pasted link from clipboard');
        }
      }
    } catch (e) {
      // Clipboard access denied or not supported
    }
  };

  return (
    <div className="bg-[#0B0F19] text-slate-100 min-h-screen">
      
      {/* Search Hero Section */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Text & Search Box */}
            <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-wider">
                <FiLink className="w-3.5 h-3.5" />
                <span>Instant Amazon Product Scraper</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display leading-tight">
                Inspect Real-Time Prices & <span className="text-primary">Historical Deals</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Paste any Amazon product URL to extract live price drops, review ratings, historical averages, and activate instant price tracking alerts.
              </p>

              {/* Enhanced Search Form */}
              <form onSubmit={handleSubmit} className="mt-8 space-y-3">
                <div className="relative flex flex-col sm:flex-row items-stretch gap-2.5 p-2 rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                  
                  <div className="relative flex-1 flex items-center">
                    <div className="pl-3.5 pr-2 text-slate-400 pointer-events-none">
                      <FiSearch className="w-5 h-5" />
                    </div>
                    <input
                      type="url"
                      required
                      placeholder="Paste Amazon product link (e.g., https://amazon.in/dp/...)"
                      value={productLink}
                      onChange={(e) => setProductLink(e.target.value)}
                      className="w-full py-3 pr-10 bg-transparent text-slate-100 placeholder-slate-500 text-sm focus:outline-none"
                    />
                    {productLink && (
                      <button
                        type="button"
                        onClick={() => setProductLink('')}
                        className="p-1.5 text-slate-400 hover:text-white transition-colors"
                        aria-label="Clear input"
                      >
                        <FiX className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Paste shortcut button */}
                    <button
                      type="button"
                      onClick={handlePaste}
                      className="hidden sm:inline-flex items-center gap-1.5 px-3 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition-colors"
                      title="Paste link from clipboard"
                    >
                      <FiCopy className="w-3.5 h-3.5" />
                      <span>Paste</span>
                    </button>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-400 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-md shadow-primary/20 hover:shadow-primary/40 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Scraping...</span>
                        </>
                      ) : (
                        <>
                          <span>Track Product</span>
                          <FiArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Micro info line */}
                <div className="flex flex-wrap items-center justify-between gap-3 px-1 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-300">Supported:</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">amazon.in</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">amazon.com</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">amzn.to</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <FiShield className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Safe & Instant Cloud Extraction</span>
                  </div>
                </div>
              </form>

              {/* Highlights */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <FiCheckCircle className="w-4 h-4 text-primary" />
                  <span>Price History Records</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <FiCheckCircle className="w-4 h-4 text-primary" />
                  <span>Lowest Price Alerts</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <FiCheckCircle className="w-4 h-4 text-primary" />
                  <span>100% Free</span>
                </span>
              </div>

            </div>

            {/* Illustration */}
            <div className="w-full lg:w-2/5 flex justify-center">
              <div className="relative p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 shadow-2xl flex items-center justify-center w-full max-w-md">
                <img
                  src={hero1}
                  alt="Dmart Amazon shopping and price comparison illustration"
                  className="w-full h-auto max-h-[340px] object-contain drop-shadow-xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Recently Searched Products Section */}
      <RecentlySearch />

      {/* Most Searched Products Section */}
      <MostSearched />

    </div>
  );
}

export default Home;
