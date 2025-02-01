import insta from "../assets/icons/instagram.svg"
import x from "../assets/icons/twitter-x.svg"
const Footer = () => {
    return (
      <footer className="bg-black text-gray-700 py-10 px-6 border-t">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Description */}
          <div>
            <h2 className="text-2xl font-bold flex items-center text-white">𝓓<span className=' opacity-60'>𝓶𝓪𝓻𝓽</span><span className="text-pink-500">.</span></h2>
            <p className="mt-3 text-sm text-white">
              D-Mart helps you track Amazon product prices and notifies you via email
              when the price drops. Stay ahead of the deals!
            </p>
          </div>
  
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold text-white">COMPANY</h3>
            <ul className="mt-3 space-y-2 text-sm text-white">
              <li><a href="#" className="hover:text-primary">Home</a></li>
              <li><a href="#" className="hover:text-primary">About us</a></li>
              <li><a href="#" className="hover:text-primary">Delivery</a></li>
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
            </ul>
          </div>
  
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold text-white">GET IN TOUCH</h3>
            <ul className="mt-3 space-y-2 text-sm text-white">
              <li>+91-7983251344</li>
              <li>support@Dmart.com</li>
              <li className="flex items-center gap-3"><a href="https://www.instagram.com/depanshuu_01/" className="hover:text-blue-600">
              <img src={insta} alt="Instagram" width={33} />
              </a>
              <a href="https://x.com/Deepanshu3130" className="hover:text-blue-600 ">
               <div className="bg-white w-6 h-5 flex">
                 <img src={x} alt="twitter " className=" mx-auto" />
               </div>
              </a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-sm text-gray-600 mt-8 border-t pt-4">
          Copyright 2025 @ Dmart.com - All Rights Reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  