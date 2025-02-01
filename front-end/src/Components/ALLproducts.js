import React from 'react'
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { getAllProduct } from '../services/productApi';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

function ALLproducts() {
    const dispatch = useDispatch();
const {products} = useSelector((state) => state.product);
console.log("product are" , products)
const callgetProduct = async() =>{
  const response = await getAllProduct(dispatch);
  if(response){
    console.log("succeessfully fetched all the products");
  }else{
    console.log("error in fetching the products")
  }
}
useEffect(()=>{
    callgetProduct();
},[])
  return (
    <div className='bg-black pb-3'>
     <h1 className='text-white text-4xl mx-auto text-center py-10 font-extrabold'>All <span className='text-white opacity-45'>COLLECTION</span> ────</h1>
     <div className='flex m-20 gap-8  flex-wrap  justify-center' >
      {products.map((product, index)=>(
        <Link to={`/product/${product._id}`} key={index} className='flex flex-row'>
          <ProductCard product={product}></ProductCard>

        </Link>

      ))}
     </div>

    </div>
  )
}

export default ALLproducts