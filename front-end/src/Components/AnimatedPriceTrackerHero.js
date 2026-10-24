import React, { useState, useEffect } from 'react';
import { FiTrendingDown, FiBell, FiShield, FiZap, FiStar } from 'react-icons/fi';

const TRACKED_ITEMS = [
  {
    id: 'airpods',
    name: 'Apple AirPods Pro (2nd Gen, USB-C)',
    category: 'Audio & Wearables',
    rating: '4.8',
    reviews: '28,410',
    originalPrice: 24900,
    currentPrice: 18990,
    lowestPrice: 18990,
    avgPrice: 22450,
    highestPrice: 24900,
    dropPercent: 24,
    points: [
      { day: 'Day 1', price: 24900, x: 20, y: 30 },
      { day: 'Day 8', price: 23990, x: 80, y: 45 },
      { day: 'Day 15', price: 24500, x: 140, y: 38 },
      { day: 'Day 22', price: 22990, x: 200, y: 65 },
      { day: 'Day 26', price: 21990, x: 260, y: 80 },
      { day: 'Today', price: 18990, x: 320, y: 125 },
    ],
    svgPath: 'M 20 30 C 50 35, 60 45, 80 45 C 110 45, 120 38, 140 38 C 170 38, 180 65, 200 65 C 230 65, 240 80, 260 80 C 290 80, 300 125, 320 125',
    svgArea: 'M 20 30 C 50 35, 60 45, 80 45 C 110 45, 120 38, 140 38 C 170 38, 180 65, 200 65 C 230 65, 240 80, 260 80 C 290 80, 300 125, 320 125 L 320 150 L 20 150 Z',
    icon: '🎧',
  },
  {
    id: 'sony',
    name: 'Sony WH-1000XM5 Noise Cancelling',
    category: 'Premium Headphones',
    rating: '4.7',
    reviews: '15,820',
    originalPrice: 34990,
    currentPrice: 24990,
    lowestPrice: 24990,
    avgPrice: 29800,
    highestPrice: 34990,
    dropPercent: 29,
    points: [
      { day: 'Day 1', price: 34990, x: 20, y: 25 },
      { day: 'Day 8', price: 32990, x: 80, y: 40 },
      { day: 'Day 15', price: 31490, x: 140, y: 55 },
      { day: 'Day 22', price: 28990, x: 200, y: 80 },
      { day: 'Day 26', price: 26990, x: 260, y: 100 },
      { day: 'Today', price: 24990, x: 320, y: 125 },
    ],
    svgPath: 'M 20 25 C 50 30, 60 40, 80 40 C 110 40, 120 55, 140 55 C 170 55, 180 80, 200 80 C 230 80, 240 100, 260 100 C 290 100, 300 125, 320 125',
    svgArea: 'M 20 25 C 50 30, 60 40, 80 40 C 110 40, 120 55, 140 55 C 170 55, 180 80, 200 80 C 230 80, 240 100, 260 100 C 290 100, 300 125, 320 125 L 320 150 L 20 150 Z',
    icon: '🎵',
  },
  {
    id: 'watch',
    name: 'Apple Watch Series 9 GPS 45mm',
    category: 'Smartwatches',
    rating: '4.8',
    reviews: '9,340',
    originalPrice: 44900,
    currentPrice: 34999,
    lowestPrice: 34999,
    avgPrice: 41200,
    highestPrice: 44900,
    dropPercent: 22,
    points: [
      { day: 'Day 1', price: 44900, x: 20, y: 28 },
      { day: 'Day 8', price: 42900, x: 80, y: 42 },
      { day: 'Day 15', price: 43500, x: 140, y: 38 },
      { day: 'Day 22', price: 38900, x: 200, y: 75 },
      { day: 'Day 26', price: 36999, x: 260, y: 95 },
      { day: 'Today', price: 34999, x: 320, y: 125 },
    ],
    svgPath: 'M 20 28 C 50 35, 60 42, 80 42 C 110 42, 120 38, 140 38 C 170 38, 180 75, 200 75 C 230 75, 240 95, 260 95 C 290 95, 300 125, 320 125',
    svgArea: 'M 20 28 C 50 35, 60 42, 80 42 C 110 42, 120 38, 140 38 C 170 38, 180 75, 200 75 C 230 75, 240 95, 260 95 C 290 95, 300 125, 320 125 L 320 150 L 20 150 Z',
    icon: '⌚',
  },
];

const AnimatedPriceTrackerHero = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAlertBlinking, setIsAlertBlinking] = useState(false);

  // Auto-switch tabs every 5 seconds to showcase animated tracking
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % TRACKED_ITEMS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  // Trigger pulse effect when tab changes
  useEffect(() => {
    setIsAlertBlinking(true);
    const timeout = setTimeout(() => setIsAlertBlinking(false), 1200);
    return () => clearTimeout(timeout);
  }, [activeTab]);

  const item = TRACKED_ITEMS[activeTab];

  return (
    <div className="relative w-full max-w-lg mx-auto">
      
      {/* Outer Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-emerald-500/20 to-primary/30 rounded-3xl blur-xl opacity-70 animate-pulse pointer-events-none" />

      {/* Main Container Window */}
      <div className="relative rounded-2xl bg-[#0F172A] border border-slate-700/80 shadow-2xl overflow-hidden">
        
        {/* Window Chrome Header */}
        <div className="px-4 py-3 bg-[#080D1A] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
            <span className="ml-2 font-mono text-[11px] text-slate-400">
              dmart.app/live-tracker
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>24/7 ACTIVE BOT</span>
          </div>
        </div>

        {/* Product Switcher Tabs */}
        <div className="p-2 bg-slate-900/90 border-b border-slate-800 flex gap-1.5 overflow-x-auto">
          {TRACKED_ITEMS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(idx)}
              className={`flex-1 min-w-[110px] flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === idx
                  ? 'bg-slate-800 text-white border border-primary/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              <span>{t.icon}</span>
              <span className="truncate">{t.id.toUpperCase()}</span>
              <span className="text-[10px] text-emerald-400 font-bold">-{t.dropPercent}%</span>
            </button>
          ))}
        </div>

        {/* Live Content Panel */}
        <div className="p-5 sm:p-6 space-y-4">
          
          {/* Product Header */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-wider mb-1">
                {item.category} · Amazon.in
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight line-clamp-1">
                {item.name}
              </h3>
              <div className="flex items-center gap-2 mt-1 text-xs text-slate-400">
                <span className="flex items-center gap-1 text-amber-400 font-semibold">
                  <FiStar className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{item.rating}</span>
                </span>
                <span>({item.reviews} verified reviews)</span>
              </div>
            </div>

            <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-2xl flex-shrink-0 shadow-inner">
              {item.icon}
            </div>
          </div>

          {/* Pricing Ticker Bar */}
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between gap-3">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-0.5">
                Current Best Price
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  ₹{item.currentPrice.toLocaleString()}
                </span>
                <span className="text-xs sm:text-sm text-slate-500 line-through">
                  ₹{item.originalPrice.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                <FiTrendingDown className="w-3.5 h-3.5" />
                <span>Save {item.dropPercent}%</span>
              </span>
              <span className="text-[10px] text-slate-500 block mt-1">
                All-time historical low
              </span>
            </div>
          </div>

          {/* Animated SVG Price Graph */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
              <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                <FiZap className="w-3.5 h-3.5 text-primary" />
                <span>30-Day Historical Price Curve</span>
              </span>
              <span className="text-emerald-400 font-mono text-[11px]">
                Drop: -₹{(item.originalPrice - item.currentPrice).toLocaleString()}
              </span>
            </div>

            {/* SVG Canvas */}
            <div className="relative w-full h-36 bg-slate-950/90 rounded-xl border border-slate-800/80 p-2 overflow-hidden flex items-end">
              
              {/* Background Horizontal Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between p-3 opacity-15 pointer-events-none">
                <div className="border-b border-dashed border-slate-400 w-full" />
                <div className="border-b border-dashed border-slate-400 w-full" />
                <div className="border-b border-dashed border-slate-400 w-full" />
              </div>

              <svg
                viewBox="0 0 340 150"
                className="w-full h-full overflow-visible"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id={`grad-${item.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Area Gradient */}
                <path
                  d={item.svgArea}
                  fill={`url(#grad-${item.id})`}
                  className="transition-all duration-700 ease-out"
                />

                {/* Line Path */}
                <path
                  d={item.svgPath}
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="transition-all duration-700 ease-out"
                />

                {/* Lowest Deal Point Highlight (Pulsing node) */}
                <circle cx="320" cy="125" r="7" fill="#10B981" className="animate-ping opacity-75" />
                <circle cx="320" cy="125" r="5" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />
              </svg>

              {/* Float label at lowest point */}
              <div className="absolute right-3 bottom-2 bg-emerald-600 text-white font-bold text-[10px] px-2 py-0.5 rounded shadow">
                Lowest: ₹{item.lowestPrice.toLocaleString()}
              </div>

              {/* Start label */}
              <div className="absolute left-3 top-2 text-[10px] text-slate-500">
                Start: ₹{item.originalPrice.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Live Alert Trigger Simulation Banner */}
          <div
            className={`p-3 rounded-xl border transition-all duration-300 flex items-center justify-between gap-3 text-xs ${
              isAlertBlinking
                ? 'bg-primary/20 border-primary text-white scale-[1.01]'
                : 'bg-slate-900/80 border-slate-800 text-slate-300'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <FiBell className="w-3.5 h-3.5 animate-bounce" />
              </div>
              <div>
                <p className="font-bold text-white text-[11px] sm:text-xs">
                  Instant Drop Notification Fired
                </p>
                <p className="text-[10px] text-slate-400">
                  Target threshold breached · Email dispatched
                </p>
              </div>
            </div>

            <span className="text-[10px] font-mono font-medium text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded border border-emerald-800/40">
              ✓ Sent to Inbox
            </span>
          </div>

        </div>

        {/* Footer Guarantee Bar */}
        <div className="px-5 py-2.5 bg-[#080D1A] border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-300">
            <FiShield className="w-3.5 h-3.5 text-primary" />
            <span>Autonomous Cloud Scraper</span>
          </span>
          <span className="text-slate-500 font-mono">
            Check Cycle: 15 mins
          </span>
        </div>

      </div>
    </div>
  );
};

export default AnimatedPriceTrackerHero;
