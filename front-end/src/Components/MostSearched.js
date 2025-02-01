import React from 'react'
import { getMostSearch } from '../services/productApi';
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
function MostSearched() {
    const [response, setResponse] = useState([])
        const mostSearch = async()=>{
           try{
            const data = await getMostSearch();
            setResponse(data);
            console.log("most search products are " , response);
           }catch(error){
            console.error("Error fetching recent products:", error);
           }
        };
        useEffect(()=>{
            mostSearch();
        },[])
  return (
    <div className='bg-black pb-6'>
        <h1 className='text-white text-4xl mx-auto text-center py-10 font-extrabold'>MOST SEARCHED <span className='text-white opacity-45'>ITEMS</span> ────</h1>
        <div>
        <div className='flex m-20 gap-8  flex-wrap justify-center'>
         {response.map((product , index)=>(
            <Link to={`/product/${product._id}`} key={index} className='flex flex-row'>
          <ProductCard product={product}></ProductCard>

        </Link>
         ))}
       </div>

       <Link to={"/allCollection"}>
        <button className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black  mx-auto flex">
          MORE...
        </button>

       </Link>

        </div>
    </div>
  )
}

export default MostSearched