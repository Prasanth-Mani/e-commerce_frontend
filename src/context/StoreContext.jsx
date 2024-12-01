import { createContext, useEffect, useState } from "react";
import axios from 'axios'



export const StoreContext=createContext(null);

const StoreContextProvider=(props)=>{


    const [cartItems,setCartItems]=useState({});
    const [token,setToken]=useState("");
    const[food_list,setFoodList]= useState([])
    const url="https://e-commerce-backend-8s1b.onrender.com";


 const addToCart=async(itemId)=>{

  if(!cartItems[itemId]){
   
    setCartItems((prev)=>({...prev,[itemId]:1}))

  }else{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  }
  if(token){
    await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
  }

 }


 const removeFromCart=async(itemId)=>{

setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

if(token){

  await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
}


 }


 const getTotalCartAmount = () => {
  let totalAmount = 0;
  
  // Check if cartItems and food_list are defined
  if (!cartItems || !food_list) {
    console.warn('cartItems or food_list is undefined');
    return 0;
  }

  // Use Object.keys to safely iterate over cartItems
  Object.keys(cartItems).forEach(item => {
    // Only process if quantity is greater than 0
    if (cartItems[item] > 0) {
      // Find the item in food_list, handling potential undefined case
      const itemInfo = food_list.find((product) => product._id === item);
      
      // Check if itemInfo exists and has a price
      if (itemInfo && itemInfo.price !== undefined) {
        totalAmount += itemInfo.price * cartItems[item];
      } else {
        console.warn(`Item not found or price undefined for item: ${item}`);
      }
    }
  });

  return totalAmount;
};


const fetchFoodList=async()=>{
  const response=await axios.get(url+"/api/products/list");
  setFoodList(response.data.data)
}


const loadCartData=async (token)=>{

  const response=await axios.post(url+"/api/cart/get",{},{headers:{token}});
  setCartItems(response.data.cartData);
 
}

 

useEffect(()=>{


  async function loadData(){
  await fetchFoodList();
  if(localStorage.getItem("token")){
    setToken(localStorage.getItem("token"));
    await loadCartData(localStorage.getItem("token"));
  }
  }
  loadData();
  },[])



    const contextValue={
food_list,
cartItems,
setCartItems,
addToCart,
removeFromCart,
getTotalCartAmount,url,token,setToken
    }

    return(

        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider
