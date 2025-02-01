import React from 'react';
//import logo from "../assets/icons/logo2.webp"
import {Link} from "react-router-dom"
import search from "../assets/icons/search.png" 
import user  from "../assets/icons/user.svg"
import heart  from "../assets/icons/red-heart.svg"


function Navbar() {
  return (
    <div className="h-14 flex  bg-black opacity-8 border-b" >
        
      <div className='flex w-11/12  justify-between mx-auto '>
      <div className='flex items-center gap-9 '>
        <Link to="/" className='flex '>
        <h1 className='text-white  text-3xl border-b hover:text-primary'>𝓓<span className=' opacity-60'>𝓶𝓪𝓻𝓽 <span className="text-pink-500 ">.</span></span></h1>
        </Link>
        <Link to={"/"}>
          <p className='text-white hover:text-primary'>HOME</p>
        </Link>

        <Link to={"/allCollection"}>
          <p className='text-white hover:text-primary'>COLLECTION</p>
        </Link>

        <Link to={"/allCollection"}>
          <p className='text-white hover:text-primary'>ABOUT US</p>
        </Link>
      </div>
      

      <div className='flex gap-6 justify-center items-center'>
        <Link to={"/search"}>
        <img src={search} width={40} height={42}
        className='hover:bg-primary'></img>
        </Link>
       
        {/* <img src={heart} width={40} height={42}></img> */}
        <Link to={""}>
        <p className='text-white text-centre hover:text-primary'>CONTACT US</p>
        </Link>
      </div>
      </div>


            
        
    </div>
  )
}

export default Navbar