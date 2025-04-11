import React from 'react'
import ProductCard from '../Components/ProductCard'
//import cartAnimation from '../assets/icons/Animation1.mp4'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getRecentProduct } from '../services/productApi'
function RecentlySearch() {
    const [response, setResponse] = useState([]); // 

    useEffect(() => {
        const recentProduct = async () => {
            try {
                const data = await getRecentProduct();
                setResponse(data);
                
            } catch (error) {
                console.error("Error fetching recent products:", error);
            }
        };

        recentProduct();
    }, []);

  return (
    
     <div className='bg-dark  pt-8 pb-8 sm:w-full'>
      <h1 className='text-white text-4xl mx-auto text-center py-10 font-extrabold'>RECENTLY SEARCHED <span className='text-white opacity-45'>PRODUCT</span> ────</h1>
       <div className='flex m-20 gap-8  flex-wrap justify-center'>
       {Array.isArray(response) && response.length > 0 ? (
        response.map((product, index) => (
            <Link to={`/product/${product._id}`} key={index} className='flex flex-row'>
                <ProductCard product={product} />
            </Link>
        ))
    ) : (
        <p className="text-center text-gray-400">No recently searched products found.</p>
    )}
    </div>
    <Link to={"/allCollection"}>
        <button className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black  mx-auto flex">
          MORE...
        </button>

       </Link>
    </div>
  )
}

export default RecentlySearch