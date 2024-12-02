import react, { useContext, useRef, useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { ContextData } from "../Context/ContextApi";


export default function Form() {
  const searchParams = new URLSearchParams(location.search).get("image");
  const [validation,setValidation]= useState({
    validation1:" ",
    validation2:" ",
    result:"",
  })

  const [products,handleCheck,newProduct,handleCross,RegisterCheck,setRegister]= useContext(ContextData)
  

  const navigate= useNavigate()

  const input1= useRef(null)
  const input2= useRef(null)

  function handleSubmit(event){
    event.preventDefault()
    let value1= input1.current.value;
    let value2= input2.current.value;
    
    if(value1===""){
      setValidation((prevValue)=>{
        return {...prevValue,validation1:"Username required"}
      })
    }

    let check="";
    if(value2===""){
      setValidation((prevValue)=>{
        return {...prevValue,validation2:"Password required"}
      })
    } else{
      if(RegisterCheck.length===0){
        setValidation((prevValue)=>{
          return {...prevValue,result:"Username is not Registered"}
      })
      }
    RegisterCheck.map((prevValue)=>{

      if(!(prevValue.username===value1)){
        setValidation((prevValue)=>{
          return {...prevValue,result:"Username is not Registered"}
      })
      } else if(!(prevValue.password===value2)){
        setValidation((prevValue)=>{
          return {...prevValue,result:"Incorrect Paswword"}
      })
      } else if(prevValue.username===value1 && prevValue.password===value2){
        check=true;
      } else{
        check=false
      }
    })
    }
   
    


    

    if(value2!=="" && value1!=="" && check){
      setValidation((prevValue)=>{
        navigate("/category"); 
        return {...prevValue,result:"Submitted successfully"}
    })
    }
    
  }

  function handleChange(){
    setValidation({
      validation1:" ",
      validation2:" ",
      result:"",
    })
  }
  return (
    <div className="pt-8 px-4">
    <form className="login-form bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl overflow-hidden border-4 border-blue-400 dark:border-blue-800 max-w-sm mx-auto  "
    onSubmit={(event)=> handleSubmit(event)}>
      <div className="px-8 py-10 md:px-10">
        <h2 className="text-4xl font-extrabold text-center text-zinc-800 dark:text-white">
          Welcome Back!
        </h2>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mt-3">
          We missed you, sign in to continue.
        </p>
        <div className="mt-10">
          <div className="relative">
            <label
              className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
              htmlFor="Username"
            >
              Username
            </label>
            <input
              placeholder="Username"
              className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
              name="Username"
              id="Username"
              type="Username"
              ref={input1}
              onChange={handleChange}
            />
            <span className="text-[10px] text-[#f52f2f] absolute -bottom-4">{validation.validation1}</span>
          </div>
          <div className="mt-6 relative">
            <label
              className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
              htmlFor="password"
            >
              Password
            </label>
            <input
              placeholder="••••••••"
              className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
              name="password"
              id="password"
              type="password"
              ref={input2}
              onChange={handleChange}
            />
            <span className="text-[10px] text-[#f52f2f] absolute -bottom-4">{validation.validation2}</span>
          </div>
          <div className="mt-10">
            <button
              className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-800"
              type="submit"
            >
              Log In
            </button>
            <p className="text-[red] text-center mt-2">{validation.result}</p>
          </div>
        </div>
      </div>
      <div className="px-8 py-4 bg-blue-200 dark:bg-zinc-800">
        <div className="text-sm text-blue-900 dark:text-blue-300 text-center">
          Don't have an account?
          <Link to="/SignUp" className="font-medium underline" >
            Sign up
          </Link>
        </div>
      </div>
    </form>
    
    </div>
  );
}
