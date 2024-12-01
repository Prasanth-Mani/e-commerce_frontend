import React, { useContext, useEffect, useState } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




//const {url}=useContext(StoreContext);


const PlaceOrder = () => {
  const {getTotalCartAmount,token,food_list,cartItems,url}=useContext(StoreContext );


    const [data,setData]=useState({

    
       firstName:"",
       lastName:"",
       email:"",
       street:"",city:"",
       state:"",
       zipcode:"",
       country:"",
       phone:"",







      
    })


    const placeOrder=async (event)=>{
   event.preventDefault();

        let orderItems=[];
      food_list.map(((item)=>{

   if(cartItems[item._id]>0){

    let itemInfo=item;
     itemInfo["quantity"]=cartItems[item._id];
     orderItems.push(itemInfo);

   }




      })) 
      let orderData = {

        address:data,
        items:orderItems,
        amount:getTotalCartAmount()+20,
      }

      console.log("Request URL:", `${url}/api/order/place`);
      console.log("Request Data:", orderData);
      let response=await axios.post(url+"/api/order/place",orderData,{headers:{token}})
           

      if(response.data.success){
        const {session_url}=response.data;
        window.location.replace(session_url)
      }else{
        alert("Error")
      }
    
    
    
    
    }

    useEffect(()=>{
console.log(data)
    },[data])

    const onChangeHandler=(event)=>{

    const name=event.target.name;
    const value=event.target.value;

    setData((data)=>({...data,[name]:value}))

    }

const navigate=useNavigate()
useEffect(()=>{

if(!token){

navigate('/cart')


}else if(getTotalCartAmount()===0){
  navigate('/cart')
}
},[token])






  return (
    <form className='place-order' onSubmit={placeOrder}>

<div className="place-order-left">
  <p className='title'>Delivery Information</p>
  <div className='multi-fields'>
<input required type="text" onChange={onChangeHandler} name='firstName' value={data.firstName} placeholder='First Name' />
<input required type="text" onChange={onChangeHandler}  name='lastName' value={data.lastName} placeholder='Last Name'/>

  </div>


<input required type="text" onChange={onChangeHandler} name='email' value={data.email} placeholder='Email Address' />
<input required type="text" placeholder='Street' onChange={onChangeHandler} name='street' value={data.street}/>

<div className='multi-fields'>
<input required type="text" placeholder='City' onChange={onChangeHandler} name='city' value={data.city} />
<input required type="text" placeholder='State' onChange={onChangeHandler} name='state' value={data.state}/>

  </div> 
  <div className='multi-fields'>
<input required type="text" placeholder='Zip Code' onChange={onChangeHandler} name='zipcode' value={data.zipcode} />
<input required type="text" placeholder='Country' onChange={onChangeHandler} name='country' value={data.country}/>

  </div>
  <input required type="text" onChange={onChangeHandler} name='phone' value={data.phone} placeholder='Phone Number' />
</div>
<div className="place-order-right">
  
  
  
<div className="cart-total">

<h2>Cart Totals</h2>

<div>


<div className="cart-total-details">
<p>Subtotal</p>
<p>Rs.{getTotalCartAmount()}</p>
</div>
<hr/>
<div className="cart-total-details">

<p>Delivery Fee</p>
<p>Rs.{getTotalCartAmount()===0?"0":"20"}</p>
</div>
<hr/>
<div className="cart-total-details">
<b>Total</b>
<b>Rs.{getTotalCartAmount()===0?0:getTotalCartAmount()+20}</b>
</div>

</div>
<button  type='submit'>PROCEED TO PAYMENT</button>





</div>
  
  
  
  
  
  
  
  </ div>





    </form>
  )
}

export default PlaceOrder