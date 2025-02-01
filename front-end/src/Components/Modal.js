import React, { useState } from 'react'
import logo from "../assets/imges/logo.png"
import close from "../assets/icons/x-close.svg"
import { trackProduct } from '../services/productApi';

function Modal({SetmodalOpen , id}) {
    const [email , setEmail ] = useState("");
    const onChangeHandler = (e)=>{
        setEmail(e.target.value)

    };
    const onSubmitHandler = async(event) => {
      event.preventDefault();
        const result = await trackProduct(id , email);
        if(!result){
          // loader and toast
          console.log("fail to track the product");

        }
        console.log("your product is now tracking ....") // add toast and loader in this
        SetmodalOpen(false);

    }
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-gray-600 bg-opacity-10 backdrop-blur-sm">
      
      <div className="w-11/12 max-w-[550px] rounded-lg border border-richblack-400 bg-white opacity-80 p-6">
        <div className='flex justify-between'>
         <img src={logo} width={68}
                        height={85}></img>
         <img src={close}  width={24}
                      height={24}
                      onClick={()=>SetmodalOpen(false)}></img>  

        </div>  {/* //logo and cross symbol */}
        <div className='flex flex-col'>
            <p className="text-secondary text-lg leading-[24px] font-extrabold mt-4">Stay updated with product pricing alerts right in your inbox!</p>
            <p className="text-sm text-gray-600 font-bold mt-2">Never miss a bargain again with our timely alerts!</p>
        </div> 
        <form className="flex flex-col mt-5" onSubmit={onSubmitHandler}>
         <label>
        
         <input 
         type="email"
         placeholder='Enter Your email here'
         name='email'
         value = {email}
         onChange = {onChangeHandler}
         className='flex-1 pl-1  text-dark text-base focus:outline-none border border-gray-700 rounded-md shadow-xs w-[60%]'
         />

         </label>
         <button type='Submit' className="px-5 py-3` text-base font-bold border  bg-dark rounded-lg mt-8 text-white hover:scale-105 duration-500 hover: border-primary">
            track
         </button>

        </form>
    </div>

    </div>
    
  )
}

export default Modal