import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiCheckCircle,
  FiArrowRight,
  FiShield,
  FiZap,
  FiDatabase,
  FiHelpCircle,
  FiMail,
} from 'react-icons/fi';

function About() {
  const faqs = [
    {
      q: 'Is Dmart completely free to use?',
      a: 'Yes, 100% free. You can track as many Amazon products as you like without any hidden fees or paid tiers.',
    },
    {
      q: 'How frequently does Dmart check Amazon prices?',
      a: 'Our autonomous monitoring engine scans tracked Amazon product listings multiple times daily to catch lightning deals and flash sales before they expire.',
    },
    {
      q: 'Which Amazon regions are supported?',
      a: 'Dmart supports Amazon.in, Amazon.com, and shortlinks (amzn.to). We are expanding to additional international Amazon marketplaces soon.',
    },
    {
      q: 'Do I need a credit card or complicated account?',
      a: 'No. You do not need to register a password or provide billing info. Simply provide your email when you set an alert for a product.',
    },
  ];

  return (
    <div className="bg-[#0B0F19] text-slate-100 min-h-screen pt-24 sm:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <FiShield className="w-3.5 h-3.5" />
            <span>Our Mission & Technology</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display leading-tight">
            Built to bring genuine transparency to online shopping.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Major retailers change product prices dozens of times a week using dynamic pricing algorithms. Dmart levels the playing field by tracking historical lows so you always buy at the right time.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 sm:mb-28">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
              <FiZap className="w-4 h-4" />
              <span>Why We Started</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
              Never fall for artificially inflated "deals" again.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Have you ever noticed a product go "on sale" for 20% off, only to realize the seller raised the original price yesterday? That is called price manipulation.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Dmart maintains a continuous record of genuine price movements across Amazon. When you look at an item on Dmart, you immediately see the authentic lowest price, average historical price, and highest price.
            </p>
            
            <div className="pt-2 flex items-center gap-4 text-sm font-semibold text-white">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Zero Spyware</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="w-4 h-4 text-emerald-400" />
                <span>No Browser Extensions</span>
              </div>
            </div>
          </div>

          {/* Architecture / Architecture Cards */}
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                  <FiZap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Autonomous Scraper Fleet</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                    Our high-throughput scraper parses real-time Amazon product pages, handling dynamic JavaScript rendering, seller variations, and inventory updates.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <FiDatabase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Timeseries Price Database</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                    Every price point is logged into our timeseries repository to compute rolling 30-day averages, all-time lows, and price elasticity metrics.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Direct Alert Dispatcher</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                    When the price dips below the target threshold, transactional email notifications are triggered within seconds so you can snag the deal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="p-8 sm:p-12 rounded-2xl bg-slate-900 border border-slate-800 mb-20 sm:mb-28 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-white font-display">₹1.4Cr+</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">Consumer Savings</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-primary font-display">15 Min</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">Target Check Interval</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-white font-display">10,000+</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">Products Monitored</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-display">0 Spam</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">Privacy Guarantee</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-20 sm:mb-28">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-2">
              <FiHelpCircle className="w-4 h-4" />
              <span>Questions & Answers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-5 sm:p-6 rounded-xl bg-slate-900/70 border border-slate-800">
                <h3 className="text-base font-semibold text-white mb-2 flex items-start gap-2.5">
                  <span className="text-primary font-bold">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-slate-300 pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center max-w-xl mx-auto space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Ready to track your first Amazon deal?
          </h2>
          <p className="text-sm text-slate-400">
            Paste any link in our search tool and get real-time price intelligence in seconds.
          </p>
          <div className="pt-2">
            <Link
              to="/search"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary hover:bg-primary-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-primary/20 transition-all active:scale-95"
            >
              <span>Go to Product Search</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
