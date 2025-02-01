import React, { useEffect, useState } from 'react'
import { getMostTrackedProduct } from '../services/productApi'
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
function MostTracked() {
    const [response, setResponse] = useState([])
    const trackFunction = async()=>{
       try{
        const data = await getMostTrackedProduct();
        setResponse(data);
        console.log("trackproduct is " , response);
       }catch(error){
        console.error("Error fetching recent products:", error);
       }
    };
    useEffect(()=>{
        trackFunction();
    },[])
  return (
    <div className='bg-dark mx-auto pb-5'>
        <h1 className='text-white text-4xl mx-auto text-center py-8 font-extrabold'>MOST TRACKED <span className='text-white opacity-45'>ITEMS</span> ────</h1>
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

export default MostTracked