import React, { useState } from 'react'
import { assets } from '../../assets/assets';
import "./LoginPopup.css"
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios"




const LoginPopup = ({setShowLogin}) => {


  const{url,token,setToken}=useContext(StoreContext);
  
const onLogin= async (event)=>{
  event.preventDefault()
  let newUrl=url;

  if(currState==="Login"){

    newUrl+="/api/user/login"

  }else{
    newUrl+="/api/user/register"

  }
  
  const response=await axios.post(newUrl,data);
  if(response.data.success){
    setToken(response.data.token);
    localStorage.setItem("token",response.data.token);
    setShowLogin(false)
  
     

  }else{
   alert(response.data.message)
  }
  
  
  }
    const [currState,setCurrState]=useState("Login")
    const [data,setData]= useState({
      name:"",
      email:"",
      password:""
    })
  





   const onChangeHandler=(event)=>{

     const name =event.target.name;
     const value=event.target.value;
     setData((data)=>({...data,[name]:value}))

   }




  return (
    <div className='login-popup'>

<form onSubmit={onLogin} className="login-popup-container">
    <div className="login-popup-title">

        <h2>{currState}</h2>
        <img onClick={()=>setShowLogin(false) } src={assets.cross_icon} />

    </div>
    <div className="login-popup-input">
        {currState==="Login"?<></>:  <input type="text" name='name' onChange={onChangeHandler} value={data.name} placeholder='Youe Name' required />}
       
         <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Youe Email' required />
         <input name='password' onChange={onChangeHandler} value={data.password}  type="password" placeholder='Password' required />
    </div>
    <button type='submit'>{currState==="Sign Up"? "create account":"Login"}</button>
    <div className="login-popup-condition"><input type="checkbox"  required />
    <p>
    By continuing, i agree to the terms of use & privacy policy.</p>

    </div>
    {currState==="Login"?<p>create a new account <span onClick={()=>setCurrState("Sign Up")}>click here</span></p>:<p>Already Have An Acccount <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
    

    
</form>



    </div>
  )
}

export default LoginPopup;