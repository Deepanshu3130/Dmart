//import React, { useEffect , useState} from 'react'
import Aos from 'aos'

import { Link } from 'react-router-dom'

import shopingCart from '../assets/icons/animation5.mp4'
import demo from '../assets/imges/demo.mp4'
import MostTracked from '../Components/MostTracked'

function Landing() {
    
  return (
    <>
      <div className='dark:bg-black  dark:text-white duration-300 ' >
        <div className=" min-h-[620px] w-[70%] mx-auto py-32  ">
            <div className='flex justify-between items-center' >
                <div className=''>
                    <h2 className='text-primary text-2xl mt-3'>Track Amazon Prices </h2>
                    <h2 className='text-5xl lg:text-7xl font-semibold mt-4' > Like Never Before!</h2>
                    <p className="mt-4">Paste the Amazon Product Link , track prices,
                    and save big with price-drop alerts!</p>
                   <Link to={"/search"}>
                   <button
            //   data-aos="fade-up"
            //   data-aos-delay="1500"
            //   onClick={() => {
            //     AOS.refreshHard();
            //   }}
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black mt-4"
            >
              Get Started
            </button>
                   </Link>
                </div>
                <div className="border-b-2">
                <video width={400} height={200}
                className="bg-white"
                muted
                autoPlay
                loop>
                  <source src={shopingCart} type="video/mp4"
                   />
                  Your browser does not support the video tag.
                </video>
              </div>

            </div>
            
        </div>
      </div>

      <div  className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
        <div className=" min-h-[620px] w-[70%] mx-auto pt-20 ">
            <div className='flex justify-between items-center gap-16' >
            <div className="">
                <video controls
                className="bg-white"
                muted
                autoPlay
                loop>
                  <source src={demo} type="video/mp4"
                   />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className='max-w-[50%]'>
                    <h2 className='text-primary text-2xl mt-3'>WHO WE ARE  </h2>
                    <h2 className='text-5xl lg:text-7xl font-semibold mt-4 text-white' > We provide a platform to track Amazon product prices,</h2>
                    <p className="mt-4 text-white">save money with price-drop notifications, and explore scraped products directly from Amazon.</p>
                    <button
            //   data-aos="fade-up"
            //   data-aos-delay="1500"
            //   onClick={() => {
            //     AOS.refreshHard();
            //   }}
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black mt-4"
            >
              Get Started
            </button>
                </div>

            </div>
            
        </div>
      </div>


      <div className='dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center mx-auto px-4 '>
        <h1 className='mx-auto text-3xl font-semibold text-center sm:text-4xl font-serif'> How It Works</h1>
        <div className='flex justify-center  items-center gap-6'>
            <div className='card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark  hover:bg-primary duration-300 text-white hover:text-black rounded-lg lg:w-[350px] md:w-1/3 min-h-fit'>
                <p>Step 1: Paste the Amazon Link
                Copy the link of the product you want to track and paste it into our search bar.</p>
            </div>
            <div className='card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark  hover:bg-primary duration-300 text-white hover:text-black rounded-lg lg:w-[350px] md:w-1/3 '>
                <p> 
                Step 2: Track Prices Automatically
                Our system monitors the price and sends you notifications if it drops.
                </p>
            </div>

            <div className='caed text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark  hover:bg-primary duration-300 text-white hover:text-black rounded-lg lg:w-[350px] md:w-1/3'>
                <p>
                Step 3: Save Money
                Act on price drops and save money on your<br></br>
                 purchases!
                </p>
            </div>
        </div>
      </div>

      <div>
        
      <MostTracked></MostTracked>





      </div>
        
    

    </>

  )
}

export default Landing