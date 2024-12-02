import React from "react"
import {createPortal} from "react-dom"

export default function Popup({setModal}){
  function handleClick(event){
    setModal(false)
    event.stopPropagation();
  }

  function handleFormClick(event){
    event.stopPropagation();
  }

  function handleCross(){
    setModal(false)
  }

  function handleSubmit(event){
    event.preventDefault ();
    setTimeout(() => {
      setModal(false)
    }, 200);
    
  }

  return createPortal(
    <div className="fixed z-20 w-full inset-0 flex items-center justify-center bg-[#00000060]"
    onClick={(event)=> handleClick(event)}
    >
    <form action="" className="relative max-w-[400px] w-full px-8 py-5  box-border m-4 bg-[#0000005e] backdrop-blur-3xl rounded-lg"
    onClick={(event)=> handleFormClick(event)}
    onSubmit={(event)=> handleSubmit(event)}

    >
      <p className="text-[1.6rem] text-[#848484] font-semibold">Contact us</p>
      <div className="absolute top-3 right-6 cursor-pointer" onClick={(event)=> handleCross(event)} >&#x2716;</div>

    <div className="flex flex-col text-[#b7b7b7] mt-3">
     <label htmlFor="fname" className="text-[.75rem] mb-1 font-bold">First Name</label>
     <input id="fname" type="First Name" className="outline-none pl-2 py-1 border-[1px] border-[solid] border-[#ccc] text-[black] text-[15px] rounded-md"/>
    </div>

    <div className="flex flex-col text-[#b7b7b7] mt-4">
     <label htmlFor="lname" className="text-[.75rem] mb-1 font-bold">Last Name</label>
     <input id="lname" type="Last Name" className="outline-none pl-2 py-1 border-[1px] border-[solid] border-[#ccc] text-[black] text-[15px] rounded-md" />
    </div>

    <div className="flex flex-col text-[#b7b7b7] mt-4">
     <label htmlFor="address" className="text-[.75rem] mb-1 font-bold">Email Address</label>
     <input id="address" type="address" className="outline-none pl-2 py-1 border-[1px] border-[solid] border-[#ccc] text-[black] text-[15px] rounded-md"/>
    </div>

    <div className="flex flex-col text-[#b7b7b7] mt-4">
     <label htmlFor="message" className="text-[.75rem] mb-1 font-bold">Message</label>
     <textarea name="text" rows={3} id="message" className="outline-none py-1 border-[1px] border-[solid] border-[#ccc] pl-2 rounded-md" style={{
      resize:"none",
      color:"black",
      fontSize:"15px"
     }} ></textarea>
    </div>
    <button className="bg-[#402b3d] hover:bg-[#402b3d70] active:bg-[#3d2c3b24] py-2 mt-4 w-[100%] text-center text-[#c2d846] rounded-md">Send</button>
   </form>
   </div>,
   document.getElementById("portal")
  )
}