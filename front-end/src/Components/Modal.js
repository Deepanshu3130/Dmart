import React, { useState, useEffect } from 'react';
import { FiX, FiMail, FiBell, FiShield, FiCheck } from 'react-icons/fi';
import { trackProduct } from '../services/productApi';

function Modal({ SetmodalOpen, id }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        SetmodalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [SetmodalOpen]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!email || !email.includes('@')) return;

    setLoading(true);
    try {
      const result = await trackProduct(id, email);
      if (result) {
        SetmodalOpen(false);
      }
    } catch (err) {
      console.error('Error tracking product:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={() => SetmodalOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="track-modal-title"
    >
      <div
        className="w-full max-w-md rounded-2xl bg-[#0F172A] border border-slate-700/80 shadow-2xl p-6 sm:p-7 relative modal-animate"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => SetmodalOpen(false)}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Close dialog"
        >
          <FiX className="w-5 h-5" />
        </button>

        {/* Header with Icon */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
            <FiBell className="w-6 h-6" />
          </div>
          <div>
            <h3 id="track-modal-title" className="text-xl font-bold text-white tracking-tight">
              Set Price Drop Alert
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
              We monitor this Amazon item 24/7 and notify you instantly the moment the price drops.
            </p>
          </div>
        </div>

        {/* Feature badges */}
        <div className="my-4 py-3 px-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-2 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <FiCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Instant email alerts when price hits new lows</span>
          </div>
          <div className="flex items-center gap-2">
            <FiShield className="w-4 h-4 text-primary flex-shrink-0" />
            <span>Zero spam. No account or credit card required</span>
          </div>
        </div>

        {/* Form */}
        <form className="mt-5 space-y-4" onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor="email-input" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Your Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <FiMail className="w-4 h-4" />
              </div>
              <input
                id="email-input"
                type="email"
                required
                placeholder="you@example.com"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => SetmodalOpen(false)}
              className="flex-1 py-2.5 px-4 rounded-lg text-sm font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-2.5 px-4 rounded-lg text-sm font-bold bg-primary hover:bg-primary-400 text-slate-950 transition-all shadow-sm shadow-primary/20 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
            >
              {loading ? 'Activating...' : 'Track Price'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
