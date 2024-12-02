import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ContextData } from "../Context/ContextApi";

export default function Info() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search).get("image");
  const [products, handleCheck, newProduct] = useContext(ContextData);
  
  return (
    <section className="max-w-[90%] mx-auto mt-20 p-4">
      <main className="flex flex-col md:flex-row gap-10">
        <div className="max-w-[296px] h-[486px] mx-auto">
          <img src={searchParams} alt="Product" className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-[490px] flex flex-col justify-between">
          <img src="logo__mcadams.svg" alt="Logo" className="w-[160px] mb-4" />
          <p className="text-[2.1rem] leading-10 mt-4 mb-2">McAdams Freeze Dried Salmon & Sole</p>
          <p className="text-[#a9b325] font-medium text-[15px] mb-3">Adult Cat</p>
          
          <Link 
            to={`/SignIn?product="hello"`}
            className="bg-red-500 text-white py-[.5rem] px-[1.5rem] font-bold max-w-[250px] rounded-md w-full hover:bg-red-600"
            onClick={() => handleCheck(searchParams)}
          >
            Add to cart
          </Link>
          
          <p className="text-[#a9b325] text-[1.85rem] mt-12 mb-6">Ingredients</p>
          <p className="leading-[1.7rem] text-[#848484] text-[18px]">
            Sustainably Sourced Salmon 60%, Sustainably Sourced Yellowfin Sole 20%, Pumpkin 5%, Potato Starch 4.6%, Modified Tapioca Starch 4.4%, Cranberries 2%, Chicory Root Powder 0.8%, Glucosamine Sulphate 1,500 mg/kg, Chondroitin Sulphate 1,500 mg/kg, Seaweed 0.1%, Yucca 0.1%, Green Tea Extract 0.01%, Vitamins, Minerals.
          </p>
        </div>
        
        <div className="flex flex-col max-w-[414px] w-full">
          <div className="flex mb-4">
            <div className="bg-[#d0e170] px-3 box-border h-[133px] rounded-l-md flex flex-col justify-center items-center">
              <span className="text-[#402b3d] font-bold text-[3rem]">92%</span>
              <p className="text-center leading-[12px] font-medium mt-1">Ingredient Score</p>
            </div>
            <div className="grid grid-rows-3 gap-2 w-full">
              {[
                "Company Information: 9/10",
                "Freeze Dried",
                "Normal Allergen"
              ].map((info, index) => (
                <div key={index} className="bg-[#F1F2F2] pl-3 flex items-center text-[14px] font-medium">
                  {info}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#402b3d] text-[#c2d846] text-[1.3rem] text-center py-2 mt-4">
            Compare Product
          </div>
        </div>
      </main>
    </section>
  );
}
