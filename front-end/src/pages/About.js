import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-0 left-0 w-full h-full opacity-5">
    <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-20 right-20 w-64 h-64 bg-primary rounded-full filter blur-3xl"></div>
  </div>

  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
    {/* Section Header */}
    <div className="text-center mb-16" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        About <span className="text-primary">Dmart</span>
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mb-6 rounded-full"></div>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Revolutionizing the way you shop online with intelligent price tracking
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left Column - Image */}
      <div className="relative" data-aos="fade-right">
        <div className="absolute -inset-6 bg-primary/10 rounded-2xl blur-xl -z-10"></div>
        <div className="overflow-hidden rounded-xl shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Team working on PricePulse"
            className="w-full h-auto object-cover transform hover:scale-105 transition duration-700"
          />
        </div>
      </div>

      {/* Right Column - Content */}
      <div className="space-y-6" data-aos="fade-left">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
          Our Mission
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          At Dmart, we're dedicated to helping savvy shoppers save money by tracking price drops on their favorite Amazon products. Our intelligent monitoring system ensures you never miss a deal.
        </p>

        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Real-time Tracking</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Monitor price changes 24/7 with our advanced tracking technology
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Instant Alerts</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Get notified immediately when prices drop below your target
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Savings Guaranteed</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Our users save an average of 25% on their Amazon purchases
              </p>
            </div>
          </div>
        </div>

       
        <Link
          to="/search"  // Make sure this matches your route exactly
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-black transition duration-300"
        >
          Get Started
          <svg className="ml-3 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
      </div>
    </div>
  </div>
</section>
  )
}

export default About