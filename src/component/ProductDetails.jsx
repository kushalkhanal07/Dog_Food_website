import React, { useContext, useState } from "react";
import { ContextData } from "../Context/ContextApi";

export default function ProductDetails() {
  const [show, setShow]= useState(false)
  const searchParams = JSON.parse(new URLSearchParams(location.search).get("product"));
  console.log(searchParams)
  const [params,setParams]=useState(searchParams)
  console.log(params[0].image)
  const [boolean,setBoolean]= useState(false)
  const [Id,setId]= useState("")
  const [data,setData]= useState({
    data1:"",
    data2:"",
    data3:"",
  })


  
  

  function handleSubmit(e){
    e.preventDefault();
    setShow(false)
  }

  

  function handleView(id){
    setShow(true)
    const [adminDetails]= params.filter((prevValue)=>{
      return prevValue.id==id
    })
    console.log(adminDetails.id)

    setId(adminDetails.id)

    setData({
      data1:adminDetails.username,
      data2:adminDetails.password,
      data3:adminDetails.confirmPw,
    })
    setBoolean(false)
  }

  
  function handleEdit(id){
    setShow(true)
    const [adminDetails]= params.filter((prevValue)=>{
      return prevValue.id==id
    })
    console.log(adminDetails.id)

    setId(adminDetails.id)

    setData({
      data1:adminDetails.username,
      data2:adminDetails.password,
      data3:adminDetails.confirmPw,
    })
    setBoolean(true)
  }

  function handleDelete(id){
    
    const adminDetails= params.filter((prevValue)=>{
      return prevValue.id!=id
    })
    setParams(adminDetails)
  }

  function handleRemove(){
    setShow(false)

  }

  function handleChange1(e){
    let values1=e.target.value
    setData((prevValue)=>{
      return {...prevValue,data1:values1}
    })
  }

  function handleChange2(e){
    let values2=e.target.value
    setData((prevValue)=>{
      return {...prevValue,data2:values2}
    })
  }

  function handleChange3(e){
    let values3=e.target.value
    setData((prevValue)=>{
      return {...prevValue,data3:values3}
    })
  }

  function handleChangeEdit(){
    console.log("clicked")
    const item=params.map((prevValue)=>{
      return prevValue.id==Id? {
        username:data.data1,
        password:data.data2,
        confirmPw:data.data3,
        id:prevValue.id,
      }:prevValue
    })
    setParams(item)

  }

  return (
    <>
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">#</th>
              <th scope="col" className="py-3 px-6">Name</th>
              <th scope="col" className="py-3 px-6">Image</th>
              <th scope="col" className="py-3 px-6">Price</th>
              <th scope="col" className="py-3 px-6">Action</th>
            </tr>
          </thead>
          
            <tbody className="border-[2px]">
            {params.map((user, index) => (
              <tr key={user.id} className="bg-white border-b border-[#e1dede]">
                <td className="py-4 px-6 font-medium  whitespace-nowrap ">
                  {index + 1}
                </td>
                <td className="py-4 px-6">
                  {user.Products_name}
                </td>
                <td className="py-4 px-6">
                  <img src={`/${user.image}`} alt="" className="w-[100px] h-[100px] object-contain object-left mix-blend-multiply text-inherit drop-shadow-2xl " />
                </td>
                <td className="py-4 px-6">
                  {user.price}
                </td>
                <td className="py-4 px-6 space-x-2">
                  <button className="bg-black text-white px-3 py-1 rounded hover:bg-gray-700"
                  onClick={()=> handleView(user.id)}
                  >View</button>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                  onClick={()=> handleEdit(user.id)}>Edit</button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                  onClick={()=> handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
          
        </table>
       
      </div>
      {
          params.length==0? <p className="text-[2em] mt-4 text-[#da1010b4] text-center"> No Data Found...</p> : ""
        }
    </div>

{show && <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-[#0000004d] backdrop-blur-sm">
<form  className="max-w-sm mx-auto relative bg-white p-6 rounded-lg shadow-lg w-full "
onSubmit={(e)=> handleSubmit(e)}
>
  <button className="absolute right-4 top-2 font-black text-[1.4rem]"
  onClick={()=> handleRemove()}
  >&#10005;</button>
<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
  <input
    type="text"
    onChange={(event)=> handleChange1(event)}
    value={data.data1}
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
    placeholder="Enter your name"
    readOnly={!boolean}
    required
  />
</div>
<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
  <input
    type="password"
    onChange={(event)=> handleChange2(event)}
    value={data.data2}
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
    placeholder="Enter your password"
    readOnly={!boolean}
    required
  />
</div>
<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
  <input
    type="password"
    onChange={(event)=> handleChange3(event)}
    value={data.data3}
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
    placeholder="Confirm your password"
    readOnly={!boolean}
    required
  />
</div>

<div className="flex justify-center">
  {boolean && <button
    type="submit"
    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
    onClick={()=> handleChangeEdit()}
  >
    Save
  </button>}
</div>
</form>
</div>}
</>
  );
}
