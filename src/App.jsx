import react, { useEffect, useState } from "react"
import Home from "./component/Home"
import Navbar from "./component/Navbar"
import { Outlet, useLocation } from "react-router-dom"
import Footer from "./component/footer"
import { ContextData } from "./Context/ContextApi"
import {nanoid} from "nanoid"

export default function App(){
  const [newProduct, setnewProduct]=useState([])
  const [RegisterCheck, setRegister]= useState([])
  console.log(RegisterCheck)
  const[path,setPath]=useState("/")
  const [isOpen,setOpen]= useState(true)
  console.log(isOpen)
  const location=useLocation()

  const [products, setProducts]= useState([
    {
      Products_name:"McAdams Freeze Dried",
      details1:"Normal Allergen",
      details2:"FreezeDried",
      price:"200",
      image:"product1.jpg",
      id:nanoid()
    },
    {
      Products_name:"Canagan Insect",
      details1:"Low Allergen",
      details2:"Extruded",
      price:"300",
      image:"product2.jpg",
      id:nanoid()
      
    },
    {
      Products_name:"McAdams Senior/chicken",
      details1:"Normal Allergen",
      details2:"Baked",
      price:"400",
      image:"product3.jpg",
      id:nanoid()
      
    },
    {
      Products_name:"McAdams Turkey Sensitive",
      details1:"Low Allergen",
      details2:"Baked",
      price:"599",
      image:"product4.jpg",
      id:nanoid()
      
    },
    {
      Products_name:"McAdams Freeze Dried",
      details1:"Normal Allergen",
      details2:"FreezeDried",
      price:"800",
      image:"product6.jpg",
      id:nanoid()
      
    },
    {
      Products_name:"McAdams Freeze Dried",
      details1:"Normal Allergen",
      details2:"FreezeDried",
      price:"900",
      image:"product7.jpg",
      id:nanoid()
      
    },
   
  ])

  function handleCheck(image){
    
    const [thing]=products.filter((prevValue)=>{
      return prevValue.image===image
    })

    setnewProduct((prevValue)=>{
      return [...prevValue,thing]
    })
  }

  function handleCross(id){{
    const newpoducts= newProduct.filter((prevValue)=>{
      return prevValue.id!==id
    })
    setnewProduct(newpoducts);
  }}

  // useEffect(()=>{
  //   // console.log(window.location.pathname)
  //   if(window.location.pathname=="/SignIn" || window.location.pathname=="/SignUp"  ){
  //     setOpen(false)
  //   }else{
  //     setOpen(true)
  //   }
  //   setPath(window.location.pathname)
  // },[location])

  return(
    <ContextData.Provider value={[
      products,
      handleCheck,
      newProduct,
      handleCross,
      RegisterCheck,
      setRegister,
      isOpen,
      setOpen,
    ]}>
{
  window.location.pathname=="/SignIn" || window.location.pathname=="/SignUp" ? null : <Navbar/>
}

    
    <div className="pt-[80px] mb-5">
    <Outlet/>
    </div>
    {
  window.location.pathname=="/SignIn" || window.location.pathname=="/SignUp"? null : <Footer/>
}
    
    </ContextData.Provider>
   

  )
}