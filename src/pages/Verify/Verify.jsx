import React, { useContext, useEffect, useState } from 'react'
import "./Verify.css"
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { useNavigate,useSearchParams } from 'react-router-dom';
const Verify = () => {

const navigate= useNavigate();
 const [searchParams,setSearchParams]=useSearchParams();
 const success=searchParams.get("success")
 const orderId=searchParams.get("orderId");

 console.log(success,orderId);

 const{url}=useContext(StoreContext);

 const VerifyPayment=async()=>{
    const response =await axios.post(url+"/api/order/verify",{success,orderId})

 if(response.data.success){
navigate("/myorders")
 }else{

  console.log(response.data)
    navigate("/")
 }
}
useEffect(()=>{VerifyPayment()},[])

  return (
    <div className='verify'>

<div className="spinner">

</div>




    </div>
  )
}

export default Verify