import React from 'react'
import { useState } from 'react'
import CarouselDefault from '../Components/CarouselDefault'
import hero1 from "../assets/imges/hero-1.svg"

import { scrapeProduct } from '../services/productApi'
import { useNavigate } from 'react-router-dom';

import MostSearched from '../Components/MostSearched'
import RecentlySearch from '../Components/RecentlySearch'



function Home() {
    const [productLink , setProductLink] = useState("");
    const Navigate = useNavigate()

    const handleSubmit = async(event) => {
        event.preventDefault();
        try{
            const result = await scrapeProduct(productLink, Navigate);
            console.log("result is=>" , result)
            if(!result){
                throw new Error("Could Not find the product")
            }
            // add toast
           // console.log("product fetched successfully", result);

          

        }catch(error){
          console.log("fail to load to scrapper the product" , error);
        }


    }
  return (
    <>
<div className='bg-black py-16 md:py-32 px-4 sm:px-6'>
    <div className='w-full md:w-10/12 flex flex-col lg:flex-row justify-center items-center mx-auto max-w-[1260px] gap-8 md:gap-12'>
        {/* Text Content - Full width on mobile, 60% on desktop */}
        <div className="w-full lg:w-[60%] flex flex-col text-center lg:text-left">
            <p className="text-white text-lg sm:text-xl font-bold">Smart Shopping Starts Here:</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-red-500">
                Unleash the Power Of <span className="text-primary">Dmart</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-white text-base sm:text-lg font-medium">
                Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
            </p>
            
            <form onSubmit={handleSubmit} className="mt-6 sm:mt-[44px] flex flex-col sm:flex-row gap-4">
                <input
                    type='text'
                    placeholder='Enter Product Link'
                    onChange={(event) => setProductLink(event.target.value)}
                    className="flex-1 w-full p-3 border border-gray-300 rounded-lg shadow-xs text-base text-gray-500 focus:outline-none"
                />
                <button 
                    type="submit" 
                    className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-3 px-6 text-black font-bold sm:mt-0"
                >
                    Search
                </button>
            </form>
        </div>

        {/* Image - Full width on mobile, 40% on desktop */}
        <div className="w-full lg:w-[40%] flex justify-center">
            <img 
                src={hero1} 
                alt="Dmart shopping illustration" 
                className="w-full max-w-[500px] lg:max-w-none object-contain"
            />
        </div>
    </div>
</div>

    <div>
    <RecentlySearch></RecentlySearch>
    
    </div>
    <div>
        <MostSearched></MostSearched>
    </div>
    </>
  )
}

export default Home