import React, { useEffect , useState} from "react";
import { useParams } from 'react-router-dom'
import { getProductDetails } from "../services/productApi";
import Modal from "../Components/Modal";
import priceTag from "../assets/icons/price-tag.svg"
import chart from "../assets/icons/chart.svg"
import arrowUp from "../assets/icons/arrow-up.svg"
import arrowDown from "../assets/icons/arrow-down.svg"



const Product = () => {
    const params = useParams();
    const [Modalopen , SetmodalOpen] = useState(false);
    console.log(params.id)
    const [result , setResult] = useState({})

    useEffect(()=>{
      const productData = async() =>{
        const response = await getProductDetails(params.id);
         console.log("response is ",response);
         setResult(response);
         console.log("result is",result)

    }
      productData()
    },[getProductDetails])
  return (
    <div className=" bg-black p-8 min-h-screen flex flex-col items-center pt-20">
    <div className="flex xl:flex-row flex-col gap-12 max-w-8xl w-full bg-dark p-8 rounded-lg shadow-lg">
      {/* Product Image */}
      <div className="product-image flex justify-center items-center p-6 bg-gray- rounded-lg group ">
        <img
          src={result.imgeUrl}
          alt={result.title}
          width={580}
          height={400}
          className="rounded-lg shadow-md group-hover:scale-110 duration-700"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-start flex-wrap pb-6 gap-5">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl text-white font-semibold">
              {result.title}
            </h2>
            {/* <a
              href={result.productUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-blue-600 hover:underline"
            >
              Visit Product
            </a> */}
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-100 rounded-full shadow">
              <span className="text-lg font-semibold text-red-500">
                ❤️ {result.reviewsCount}
              </span>
            </div>
            <div className="p-2 bg-gray-100 rounded-full shadow">
              <span className="text-lg text-gray-700">🔖</span>
            </div>
            <div className="p-2 bg-gray-100 rounded-full shadow">
              <span className="text-lg text-gray-700">🔗</span>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="product-info flex  gap-14 justify-center items-center border-y-[#180404] ">
           
        <div className=" flex flex-col gap-2">
          <p className="text-4xl font-bold text-green-600">
            ₹{result.currentPrice}
          </p>
          <p className="text-xl text-gray-500 line-through">
            ₹{result.originalPrice}
          </p>
        </div>

        {/* Ratings & Reviews */}
         <div className="flex-col justify-center">
         <div className="flex gap-3 mt-4">
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 text-lg">⭐</span>
            <p className="text-lg font-semibold text-gray-700">
              {result.stars || "25"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-500 text-lg">💬</span>
            <p className="text-lg font-semibold text-gray-700">
              {result.reviewsCount} Reviews
            </p>
          </div>
        </div>
        <p className="text-gray-600 mt-2">
          <span className="text-green-600 font-semibold">93% </span>
          of buyers recommended this product.
        </p>
         </div>
          
        </div>


        {/* Price Info Cards */}
        <div className="my-7 grid grid-cols-2 gap-5">
          <div className="p-4 bg-primary rounded-lg shadow flex gap-14">
            <div>
            <p className="text-sm text-white opacity-80 font-bold">Current Price</p>
            <p className="text-lg font-semibold">₹{result.currentPrice}</p>
            </div>
            <img src={priceTag}
            width={40} height={30}></img>
          </div>
          <div className="p-4 bg-primary rounded-lg shadow flex gap-14">
            <div>
            <p className="text-sm text-white opacity-80 font-bold">Average Price</p>
            <p className="text-lg font-semibold">₹{result.avgPrice}</p>
            </div>
            <img src={chart}
            width={40} height={24}></img>
          </div>
          <div className="p-4 bg-primary rounded-lg shadow flex gap-14">
            <div>
            <p className="text-sm text-white opacity-80 font-bold">Highest Price</p>
            <p className="text-lg font-semibold">₹{result.maxPrice}</p>
            </div>
            <img src={arrowUp}
            width={40} height={24}></img>
          </div>
          <div className="p-4 bg-primary rounded-lg shadow flex gap-14">
            <div>
            <p className="text-sm text-white opacity-80 font-bold">Lowest Price</p>
            <p className="text-lg font-semibold">₹{result.lowestPrice}</p>
            </div>
            <img src={arrowDown}
            width={40} height={24}></img>

          </div>
        </div>

        {/* Track Button */}
        <div className="flex gap-6">
        <button
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={() => SetmodalOpen(true)}
        >
          Track Price
        </button>
        
          <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          <a href={result.url} target="_blank" rel="noopener noreferrer">
           Vist Product
          </a>
          </button>
       

        </div>

        {/* Modal */}
        {Modalopen && <Modal SetmodalOpen={SetmodalOpen} id={params.id} />}
      </div>
    </div>
  </div>
  );
};

export default Product;
