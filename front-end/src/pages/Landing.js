import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedPriceTrackerHero from '../Components/AnimatedPriceTrackerHero';
import AnimatedDealInspector from '../Components/AnimatedDealInspector';
import MostTracked from '../Components/MostTracked';
import {
  FiArrowRight,
  FiCheckCircle,
  FiShield,
  FiTrendingDown,
  FiClock,
  FiGrid,
  FiSearch,
} from 'react-icons/fi';

function Landing() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const steps = [
    {
      num: '01',
      title: 'Paste Product Link',
      desc: 'Copy any product URL from Amazon.in or Amazon.com and drop it into our intelligent scraper.',
      icon: FiSearch,
    },
    {
      num: '02',
      title: 'Continuous Tracking',
      desc: 'Our engine extracts price history, computes high/low thresholds, and checks for price swings 24/7.',
      icon: FiClock,
    },
    {
      num: '03',
      title: 'Buy at Lowest Price',
      desc: 'Receive an instant notification the second the price drops so you can complete your purchase at the best rate.',
      icon: FiTrendingDown,
    },
  ];

  const features = [
    {
      title: 'True Historical Benchmarks',
      desc: 'Never get tricked by fake discounts. We log highest, lowest, and average pricing so you know if a sale is genuinely good.',
      icon: FiTrendingDown,
    },
    {
      title: 'Instant Email Notifications',
      desc: 'Set your alert in 5 seconds. When prices drop below current levels, an alert lands in your inbox right away.',
      icon: FiCheckCircle,
    },
    {
      title: 'No Extensions Needed',
      desc: 'Runs completely in the cloud. No intrusive browser plugins, no tracking cookies, and works smoothly on mobile.',
      icon: FiShield,
    },
  ];

  return (
    <div className="bg-[#0B0F19] text-slate-100 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left" data-aos="fade-up">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span>Intelligent Amazon Price Tracker</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.12]">
                Buy Amazon items at their <span className="text-primary">lowest price</span>.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Paste any Amazon product link. We track price volatility, evaluate historic deal quality, and email you the minute discounts go live.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link
                  to="/search"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary hover:bg-primary-400 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95"
                >
                  <span>Start Tracking Free</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/allCollection"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 font-semibold text-sm transition-all active:scale-95"
                >
                  <FiGrid className="w-4 h-4 text-slate-400" />
                  <span>Browse Tracked Deals</span>
                </Link>
              </div>

              {/* Micro-trust indicators */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <FiCheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>100% Free Forever</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FiCheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>No Account Required</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FiCheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>24/7 Price Monitoring</span>
                </div>
              </div>

            </div>

            {/* Right Visual: Live Animated Price Tracking Engine */}
            <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-left" data-aos-delay="100">
              <AnimatedPriceTrackerHero />
            </div>

          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <section className="py-12 bg-slate-950/60 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <p className="text-2xl sm:text-3xl font-extrabold text-white font-display">₹1.4Cr+</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">Savings Unlocked</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <p className="text-2xl sm:text-3xl font-extrabold text-primary font-display">24 / 7</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">Autonomous Scans</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <p className="text-2xl sm:text-3xl font-extrabold text-white font-display">10,000+</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">Tracked Products</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-display">100%</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">Free Email Alerts</p>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 sm:py-28 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-2">
              <FiClock className="w-4 h-4" />
              <span>Simple 3-Step Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              How Dmart Works
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
              No complex setup or browser extensions required. Get price drop alerts in under thirty seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="relative p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-3xl font-extrabold text-slate-700 font-display">
                        {item.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs font-semibold text-primary">
                    <span>Step {index + 1} of 3</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Product Feature / Live Analytics Showcase Section */}
      <section className="py-20 sm:py-28 bg-[#090D16] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Analytics Showcase (7 Cols) - Replaced Video with Live Animated Deal Inspector */}
            <div className="lg:col-span-7 order-2 lg:order-1" data-aos="fade-right">
              <AnimatedDealInspector />
            </div>

            {/* Content (5 Cols) */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6" data-aos="fade-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                <FiTrendingDown className="w-4 h-4" />
                <span>Smart Price Intelligence</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display leading-tight">
                Inspect deal quality before hitting buy.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Online retailers constantly alter prices based on demand and seasonality. Dmart gives you total transparency on whether you are getting a genuine bargain or an artificial discount.
              </p>

              <div className="space-y-4 pt-2">
                {features.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div key={i} className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{f.title}</h4>
                        <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <Link
                  to="/search"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-400 text-slate-950 font-bold text-sm transition-all shadow-md shadow-primary/20 hover:shadow-primary/40 active:scale-95"
                >
                  <span>Try It With an Amazon URL</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Most Tracked Deals Section */}
      <MostTracked />

      {/* Final Call to Action Section */}
      <section className="py-20 bg-gradient-to-b from-[#0B0F19] to-slate-950 border-t border-slate-800/80 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Start saving on your Amazon purchases today.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Join savvy online shoppers who use Dmart to catch lightning deals and never pay full retail price again.
          </p>
          <div className="pt-2">
            <Link
              to="/search"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary hover:bg-primary-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95"
            >
              <span>Track Your First Product</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Landing;
