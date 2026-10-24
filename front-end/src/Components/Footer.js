import React from 'react';
import { Link } from 'react-router-dom';
import insta from '../assets/icons/instagram.svg';
import xIcon from '../assets/icons/twitter-x.svg';
import { FiMail, FiPhone, FiCheckCircle } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#070B14] text-slate-300 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Brand Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-sm shadow-primary/20">
                <svg className="w-4 h-4 text-slate-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                  <line x1="7" y1="7" x2="7.01" y2="7" />
                </svg>
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white font-display">
                DMart<span className="text-primary">.</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              DMart monitors Amazon product prices around the clock and sends instant email notifications the moment discounts go live. Save money without checking manually.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Monitoring Daemons: Operational</span>
            </div>
          </div>

          {/* Quick Links Column (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/search" className="hover:text-primary transition-colors">
                  Track URL
                </Link>
              </li>
              <li>
                <Link to="/allCollection" className="hover:text-primary transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Mission
                </Link>
              </li>
            </ul>
          </div>

          {/* Features Column (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Capabilities
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <FiCheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span>Amazon.in & Amazon.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FiCheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span>Historical Low Tracking</span>
              </li>
              <li className="flex items-center gap-2">
                <FiCheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span>Transactional Email Alerts</span>
              </li>
              <li className="flex items-center gap-2">
                <FiCheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span>Cloud Scraping Engine</span>
              </li>
            </ul>
          </div>

          {/* Contact & Socials (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li className="flex items-center gap-2 text-slate-300">
                <FiMail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:support@dmart.com" className="hover:text-white transition-colors">
                  support@dmart.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <FiPhone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+917983251344" className="hover:text-white transition-colors">
                  +91 79832 51344
                </a>
              </li>
              <li className="pt-2 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/depanshuu_01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-primary flex items-center justify-center p-1.5 transition-colors"
                  aria-label="Instagram profile"
                >
                  <img src={insta} alt="Instagram" className="w-full h-full object-contain" />
                </a>
                <a
                  href="https://x.com/Deepanshu3130"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-primary flex items-center justify-center p-1.5 transition-colors"
                  aria-label="Twitter X profile"
                >
                  <img src={xIcon} alt="Twitter X" className="w-4 h-4 object-contain invert" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} DMart Tracker. All rights reserved.</p>
          <p className="max-w-md text-[11px] text-slate-600 leading-tight">
            Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates. DMart is an independent price tracking tool.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
