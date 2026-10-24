import React, { useState, useEffect } from 'react';
import { FiSearch, FiTrendingDown, FiShield, FiCpu, FiActivity } from 'react-icons/fi';

const PIPELINE_STEPS = [
  { label: 'Scraping Amazon.in Product DOM', time: '142ms', status: 'done' },
  { label: 'Validating Prime & Seller Rating', time: '88ms', status: 'done' },
  { label: 'Computing 90-Day Volatility Curve', time: '115ms', status: 'done' },
  { label: 'Authenticating True Discount', time: '94/100', status: 'active' },
];

const AnimatedDealInspector = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [scanPulse, setScanPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % PIPELINE_STEPS.length);
      setScanPulse(true);
      setTimeout(() => setScanPulse(false), 800);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-700/80 shadow-2xl overflow-hidden">
      
      {/* Chrome Top Bar */}
      <div className="px-4 py-3 bg-[#080D1A] border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </div>
          <span className="ml-2 font-mono text-xs text-slate-400">
            dmart.app/deal-intelligence-engine
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono text-emerald-400 font-bold">
            CONFIDENCE: 98.6%
          </span>
        </div>
      </div>

      {/* Simulated URL Input Scanner */}
      <div className="p-4 sm:p-5 bg-slate-950/70 border-b border-slate-800/80 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
          <FiSearch className="w-4 h-4 animate-pulse" />
        </div>
        <div className="flex-1 overflow-hidden">
          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
            Target Scraped URL
          </p>
          <p className="text-xs sm:text-sm font-mono text-slate-200 truncate">
            https://www.amazon.in/dp/B0BDHW4P13/ref=deal_update_track
          </p>
        </div>
        <span className="hidden sm:inline-flex px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-[10px] font-bold border border-slate-700">
          HTTPS · 200 OK
        </span>
      </div>

      {/* Main Inspection Grid */}
      <div className="p-5 sm:p-6 space-y-5">
        
        {/* Deal Score & Verification Badge */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          
          <div className="p-3.5 rounded-xl bg-slate-950/90 border border-emerald-500/30 flex flex-col justify-between">
            <span className="text-[10px] uppercase font-bold text-slate-400">
              Deal Authenticity
            </span>
            <div className="flex items-baseline gap-1.5 my-1">
              <span className="text-2xl font-extrabold text-emerald-400">96</span>
              <span className="text-xs text-slate-400">/ 100</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-medium">
              ✓ Genuine Price Cut
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 flex flex-col justify-between">
            <span className="text-[10px] uppercase font-bold text-slate-400">
              Price Manipulation Test
            </span>
            <div className="flex items-center gap-1.5 my-1 text-white font-bold text-sm">
              <FiShield className="w-4 h-4 text-emerald-400" />
              <span>PASSED</span>
            </div>
            <span className="text-[10px] text-slate-400">
              No recent artificial markup
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 flex flex-col justify-between">
            <span className="text-[10px] uppercase font-bold text-slate-400">
              Savings Magnitude
            </span>
            <div className="flex items-baseline gap-1 my-1 text-primary font-bold text-lg">
              <FiTrendingDown className="w-4 h-4" />
              <span>-₹5,910</span>
            </div>
            <span className="text-[10px] text-slate-400">
              Lowest in 90 days
            </span>
          </div>

        </div>

        {/* Live Autonomous Pipeline Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span className="font-semibold text-slate-300 flex items-center gap-1.5">
              <FiCpu className="w-3.5 h-3.5 text-primary" />
              <span>Scraper Pipeline Status</span>
            </span>
            <span className="text-primary font-mono text-[11px]">
              Engine Cycle #4,821
            </span>
          </div>

          <div className="space-y-1.5">
            {PIPELINE_STEPS.map((step, idx) => {
              const isCurrent = activeStep === idx;
              return (
                <div
                  key={idx}
                  className={`p-2.5 rounded-xl border text-xs flex items-center justify-between transition-all duration-300 ${
                    isCurrent
                      ? 'bg-primary/10 border-primary/50 text-white shadow-sm'
                      : 'bg-slate-950/50 border-slate-800/80 text-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isCurrent ? 'bg-primary animate-ping' : 'bg-emerald-400'
                      }`}
                    />
                    <span className="font-medium">{step.label}</span>
                  </div>

                  <span className="font-mono text-[11px] text-slate-400">
                    {step.time}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Dynamic Radar Ticker */}
        <div className="p-3 rounded-xl bg-[#080D1A] border border-slate-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <FiActivity
              className={`w-4 h-4 text-emerald-400 ${
                scanPulse ? 'scale-125 text-primary' : ''
              } transition-transform duration-300`}
            />
            <span className="font-medium">
              Autonomous background scans running across Amazon.in
            </span>
          </div>
          <span className="text-emerald-400 font-mono text-[11px] font-bold">
            99.9% SYNC
          </span>
        </div>

      </div>
    </div>
  );
};

export default AnimatedDealInspector;
