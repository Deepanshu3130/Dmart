import React, { useEffect } from 'react';
import Aos from 'aos';
import { Link } from 'react-router-dom';
import shopingCart from '../assets/icons/animation5.mp4';
import demo from '../assets/imges/demo.mp4';
import MostTracked from '../Components/MostTracked';
import AOS from 'aos';

function Landing() {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='dark:bg-black dark:text-white duration-300'>
            {/* Hero Section */}
            <section className="min-h-screen md:min-h-[620px] w-full px-4 sm:px-6 md:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto py-16 md:py-32 flex items-center">
                <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 md:gap-12">
                  {/* Text Content - Full width on mobile, 50% on desktop */}
                  <div className='w-full lg:max-w-[50%]' data-aos="fade-right">
                    <h2 className='text-primary text-xl sm:text-2xl font-medium mb-2 sm:mb-3'>Track Amazon Prices</h2>
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6'>
                      Like <span className="text-primary">Never</span> Before!
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                      Paste the Amazon Product Link, track prices, and save big with price-drop alerts!
                    </p>
                    <Link to={"/search"} className="inline-block">
                      <button className="rounded-lg bg-primary hover:bg-primary/90 transition-all duration-300 py-2 px-6 sm:py-3 sm:px-8 text-black font-medium shadow-lg hover:shadow-primary/30 text-sm sm:text-base">
                        Get Started
                      </button>
                    </Link>
                  </div>

                  {/* Video - Full width on mobile, 50% on desktop */}
                  <div className="relative w-full lg:w-auto" data-aos="fade-left">
                    <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-primary/10 rounded-xl blur-lg"></div>
                    <video 
                      width={400} 
                      height={200}
                      className="w-full max-w-[400px] mx-auto bg-white rounded-lg shadow-xl"
                      muted
                      autoPlay
                      loop
                      playsInline
                    >
                      <source src={shopingCart} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </section>

            {/* About Section */}
            <section className="dark:bg-dark bg-slate-100 py-12 md:py-20">
              <div className="min-h-[400px] md:min-h-[620px] w-full px-4 sm:px-6 md:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto pt-12 md:pt-20">
                <div className='flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12 lg:gap-16'>
                  {/* Video - Full width on mobile, 50% on desktop */}
                  <div className="relative w-full lg:w-1/2 order-2 lg:order-1" data-aos="fade-right">
                    <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-primary/10 rounded-xl blur-lg"></div>
                    <video 
                      controls
                      className="w-full bg-white rounded-lg shadow-xl"
                      muted
                      autoPlay
                      loop
                      playsInline
                    >
                      <source src={demo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  {/* Text Content - Full width on mobile, 50% on desktop */}
                  <div className='w-full lg:w-1/2 order-1 lg:order-2' data-aos="fade-left">
                    <h2 className='text-primary text-xl sm:text-2xl font-medium mb-2 sm:mb-3'>WHO WE ARE</h2>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6'>
                      We provide a platform to track Amazon product prices
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                      Save money with price-drop notifications, and explore scraped products directly from Amazon.
                    </p>
                    <Link to={"/search"} className="inline-block">
                      <button className="rounded-lg bg-primary hover:bg-primary/90 transition-all duration-300 py-2 px-6 sm:py-3 sm:px-8 text-black font-medium shadow-lg hover:shadow-primary/30 text-sm sm:text-base">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* How It Works Section */}
            <section className="dark:bg-black py-20 w-[70%] mx-auto">
                <h1 className='text-3xl sm:text-4xl font-bold text-center mb-16' data-aos="fade-up">
                    How It <span className="text-primary">Works</span>
                </h1>
                <div className='flex lg:flex-row justify-center items-center gap-6 flex-col'>
                    {[
                        {
                            step: "Step 1: Paste the Amazon Link",
                            description: "Copy the link of the product you want to track and paste it into our search bar."
                        },
                        {
                            step: "Step 2: Track Prices Automatically",
                            description: "Our system monitors the price and sends you notifications if it drops."
                        },
                        {
                            step: "Step 3: Save Money",
                            description: "Act on price drops and save money on your purchases!"
                        }
                    ].map((item, index) => (
                        <div 
                            key={index}
                            className='bg-dark hover:bg-primary/10 border border-gray-700 hover:border-primary/30 transition-all duration-500 p-8 rounded-xl text-center flex flex-col justify-between min-h-[300px] lg:w-[350px] md:w-1/3'
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div>
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-primary text-xl font-bold">{index + 1}</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">{item.step}</h3>
                                <p className="text-gray-400">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Most Tracked Section */}
            <section className=" mx-auto py-20">
                <MostTracked />
            </section>
        </div>
    )
}

export default Landing;