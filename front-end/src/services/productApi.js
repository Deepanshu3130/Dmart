import { apiConnector } from "./apiConnector";
import { setProduct } from "../slices/productSlice";
import {toast} from "react-hot-toast";

const BASE_URL =process.env === "development"? process.env.REACT_APP_URL: "/api/v1";
console.log(BASE_URL)

const GET_ALL_PRODUCTS = BASE_URL + "/scrapeData/getAllProduct"
const GET_PRODUCTDETAILS = BASE_URL + "/scrapeData/getProductDetails"
const SCRAPE_PRODUCT =BASE_URL + "/scrapeData/scrapeProduct"
const TRACK_PRODUCT = BASE_URL + "/scrapeData/trackProduct" 
const GET_MOST_TRACKED = BASE_URL + "/scrapeData/getMostTrackedProduct"
const Get_RECENT = BASE_URL + "/scrapeData/getRecentProduct"
const Get_MOST_SEARCHED = BASE_URL + "/scrapeData/getMostSearch"


export const getAllProduct = async(dispatch)=>{
    let result = []
    try{
        const response = await apiConnector("GET" , GET_ALL_PRODUCTS);
        console.log("getallcourse API RESPONSE............", response)
        if(!response.data.success){
            throw new Error("Could Not Fetch all products")
        }
        result = response.data.products
        dispatch(setProduct(result));
        console.log("rsult is ", result)
        return true;
    }catch(error){
        console.log("GET_ALL_COURSE_API API ERROR............", error);
        return false
    }
    
}

export const getMostTrackedProduct = async()=>{
  let result = []
  try{
      const response = await apiConnector("GET" , GET_MOST_TRACKED);
      console.log("getMostTrackedProduct API RESPONSE............", response)
      if(!response.data.success){
          throw new Error("Could Not Fetch getMostTrackedProduct")
      }
      result = response.data.products
      
      console.log("rsult is ", result)
      return result;
  }catch(error){
      console.log("getMostTrackedProduct API ERROR............", error);
      return false
  }
  
}

export const getMostSearch = async()=>{
  let result = []
  try{
      const response = await apiConnector("GET" , Get_MOST_SEARCHED);
      console.log(" Get_MOST_SEARCHED API RESPONSE............", response)
      if(!response.data.success){
          throw new Error("Could Not Fetch  Get_MOST_SEARCHED")
      }
      result = response.data.products
      
      console.log("rsult is ", result)
      return result;
  }catch(error){
      console.log(" Get_MOST_SEARCHED API ERROR............", error);
      return false
  }
  
}

export const getRecentProduct = async()=>{
  let result = []
  try{
      const response = await apiConnector("GET" , Get_RECENT);
      console.log("  Get_RECENT API RESPONSE............", response)
      if(!response.data.success){
          throw new Error("Could Not Fetch   Get_RECENT")
      }
      result = response.data.products
      
      console.log("rsult is ", result)
      return result;
  }catch(error){
      console.log("  Get_RECENT API ERROR............", error);
      return false
  }
  
}

export const  getProductDetails = async(productId)=>{
    let result = null
    try {
      const response = await apiConnector("POST", GET_PRODUCTDETAILS, {
        productId,
      })
      console.log("COURSE_DETAILS_API API RESPONSE............", response)
  
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      return result = response.data.response ;
    }catch(error){
        console.log("COURSE_DETAILS_API API ERROR............", error)
       // result = error.response.response
    }

    

}

export const scrapeProduct = async (url , Navigate) => {
  const toastId = toast.loading("Finding the product details..."); 
  let result = "";

  try {
    const response = await apiConnector("POST", SCRAPE_PRODUCT, { url });
    //console.log("Scrape API RESPONSE............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success(response.data.message);
    result = response.data.details || response.data.product ;
    Navigate(`/product/${result._id}`)
  } catch (error) {
   // console.error("Scrape API ERROR............", error);

    const errorMessage = error.response?.data?.message || "Enter a valid link";
    toast.error(errorMessage);
  } finally {
    toast.dismiss(toastId); 
  }

  return result;
};

export const trackProduct = async (id, email) => {
  // if (!id || !email) {
  //   toast.error("Product ID and Email are required!");
  //   return false;
  // }

  const toastId = toast.loading("Tracking the product...");

  try {
    const response = await apiConnector("POST", TRACK_PRODUCT, { id, email });

    console.log("trackProduct API RESPONSE............", response);

    if (!response.data.success) {
      toast.error(response.data.message);
      throw new Error(response.data.message);
    }

    toast.success(response.data.message);
    return response.data.success;

  } catch (error) {
    console.error("trackProduct API ERROR............", error);

    const errorMessage = error.response?.data?.message || "Something went wrong!";
    toast.error(errorMessage);
    return false;  // Return false in case of failure

  } finally {
    toast.dismiss(toastId); // Ensures toast is dismissed in all cases
  }
};


























// router.post("/scrapeProduct", scrapAmazonProduct);
// router.get("/getAllProduct" , getAllProduct);
// router.get("/getProductDetails" , getProductDetails);
// router.post("/trackProduct" , trackProduct)
