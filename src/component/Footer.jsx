import React, { useContext } from "react"
import { ContextData } from "../Context/ContextApi";

export default function Footer(){
  const [products, handleCheck, newProduct, handleCross, RegisterCheck, setRegister,isOpen,setOpen] = useContext(ContextData);
  return(
    <>
    {isOpen && <footer className=" bg-[#402b3d] ">
      <div  className="max-w-[80%] mx-auto flex justify-between py-5 text-[#8e768b]">
      <p>
      Copyright © 2024 Pet Food Expert. All rights reserved. | <span className="underline">Privacy & Cookie Policy</span>
      </p>
      <p>website by <span className="text-[#fff]">vektor</span></p>
      </div>
    </footer>}
    </>
  )
}