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
    <div className='bg-black py-32 '>
    <div className='w-10/12 flex flex-row justify-center items-center mx-auto max-w-[1260px]'>
        <div className="w-[60%] flex flex-col" >
            <p className="text-white text-xl font-bold">Smart Shopping Starts Here: </p>
            <p className=" text-red-500 head-text">Unleash the Power Of
            <span className="text-primary"> Dmart</span></p>
            <p  className="mt-6 text-white text-xl font-semibold">
            Powerful, self-serve product and growth analytics to help you convert,<br></br>  engage, and retain more.
           
            </p>
            <form onSubmit={handleSubmit} className="mt-[44px] flex gap-6">
                <input
                type='text'
                placeholder='Enter Product Link'
                onChange={(event)=>setProductLink(event.target.value)}
                    className="flex-1 max-w-[500px] w-full p-3 border border-gray-300 rounded-lg shadow-xs text-base text-gray-500 focus:outline-none"
                ></input>

                <button type ="submit"  className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black mt-4 font-bold ">
                    Search
                 </button> {/*onsubmit handler pending */}
                
            </form>

        </div>
        <div>
            <img src={hero1}></img>
           
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