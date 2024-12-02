import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ContextData } from "../Context/ContextApi";
import {nanoid} from "nanoid"

export default function Form2(){
  const [validation,setValidation]= useState({
    validation1:" ",
    validation2:" ",
    validation3:" ",
    result:"",
  })

  const [boolean, setBoolean]= useState(false)

  const [products,handleCheck,newProduct,handleCross,RegisterCheck,setRegister]= useContext(ContextData)
 

  const input1= useRef(null)
  const input2= useRef(null)
  const input3= useRef(null)

  function handleSubmit(event){
    event.preventDefault()
    let value1= input1.current.value;
    let value2= input2.current.value;
    let value3= input3.current.value;

    
    
    if(value1===""){
      setValidation((prevValue)=>{
        return {...prevValue,validation1:"Username required"}
      })
    }

    if(value2===""){
      setValidation((prevValue)=>{
        return {...prevValue,validation2:"Password required"}
      })
    }

    if(value3===""){
      setValidation((prevValue)=>{
        return {...prevValue,validation3:"Confirm password required"}
      })
    }

    if(value2!=="" && value3!=="" && value2!==value3){
      setValidation((prevValue)=>{
        input2.current.value=""
        input3.current.value=""
        return {...prevValue,validation3:"password does not match"}
    })
    }

    if(value2!=="" && value3!=="" && value1!=="" && value2===value3){
      const find= RegisterCheck.find((prevValue)=>{
        return prevValue.username === value1
      })

      
      
      if(!find){
        setRegister((prevValue,index)=>{
          return [...prevValue,{
            username:value1,
            password:value2,
            confirmPw:value3,
            id:nanoid()
          }]
        })

        setValidation((prevValue)=>{
          input1.current.value=""
          input2.current.value=""
          input3.current.value=""
          setBoolean(true)
          return {...prevValue,result:"Submitted successfully"}
          
      })
      }else{
        setValidation((prevValue)=>{
          input1.current.value=""
          input2.current.value=""
          input3.current.value=""
          setBoolean(false)
          return {...prevValue,result:"Username is already registered"}
          
      })

      }    
    }
   
  }

  function handleChange(){
    setValidation({
      validation1:" ",
      validation2:" ",
      validation3:" ",
      result:"",
    })
  }

  return (
    <div className="pt-8">
    <form className=" " onSubmit={(event)=> handleSubmit(event)}>
      <div className="flex flex-col items-center justify-center px-2 py-8 mx-auto lg:py-0 ">
        <div className="w-[] bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-4  flex flex-col gap-y-4 py-12 sm:px-10 dark:bg-zinc-900 rounded-2xl relative">
          <Link to={`/admin?password=${JSON.stringify(RegisterCheck)}&product=${JSON.stringify(newProduct)}`} className="text-[white] bg-red-500 inline-flex px-3 py-1 rounded-lg absolute top-3 right-3">Admin</Link>
            <p className="text-xl font-bold leading-tight tracking-tight  text-[#fff] md:text-2xl text-center">
              Sign Up
            </p>
            <div className="text-white relative">
              <label className="block mb-2 text-sm font-medium  text-[#fff]">
                Your username
              </label>
              <input
                placeholder="Username"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 outline-none"
                id="username"
                type="text"
                ref={input1}
                onChange={handleChange}
              />
              <span className="text-[10px] text-[#f52f2f] absolute -bottom-4">{validation.validation1}</span>
            </div>
            <div className="text-white relative">
              <label className="block mb-2 text-sm font-medium  text-[#fff]">
                Password
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 outline-none"
                placeholder="••••••••"
                id="password"
                type="password"
                ref={input2}
                onChange={handleChange}
              />
              <span className="text-[10px] text-[#f52f2f] absolute -bottom-4">{validation.validation2}</span>
            </div>
            <div className="text-white relative">
              <label className="block mb-2 text-sm font-medium  text-[#fff]">
                Confirm password
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 outline-none"
                placeholder="••••••••"
                id="confirmPassword"
                type="password"
                ref={input3}
                onChange={handleChange}
              />
              <span className="text-[10px] text-[#f52f2f] absolute -bottom-4">{validation.validation3}</span>
            </div>

            <button
              className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white mt-1"
              type="submit"
            >
              Submit
            </button>
            
            <p className={`text-center ${boolean ? "text-lime-500" :"text-red-500"} `}>{validation.result}</p>
            <div className="px-8 py-4 bg-blue-200 dark:bg-zinc-800">
              <div className="text-sm text-blue-900 dark:text-blue-300 text-center">
                Already have an account? 
                <Link to="/SignIn" className="font-medium underline" href="#">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </form>
    
    </div>
  );
}
