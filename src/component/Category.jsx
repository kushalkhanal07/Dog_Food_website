import react, { useContext, useState } from "react";
import { ContextData } from "../Context/ContextApi";
import { Link } from "react-router-dom";

export default function Category() {
  const [products, handleCheck, newProducts,handleCross] = useContext(ContextData);

  const [isHidden, setHidden]= useState(false)
  const [hiddenValue, setHiddenValue] = useState("");
  console.log(newProducts)

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity(quantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1); 
    }
  };


  function handleHidden(boolean,value){
    setHidden(boolean)
    setHiddenValue(value)
  }

  return (
    <main className="mt-16 mb-48">
      <div className="max-w-[90%] mx-auto flex justify-between flex-wrap gap-10 mt-10 min-h-[271px]">
        {newProducts.map((prevValue) => {
          return (
            <div
              key={prevValue.id}
              className="max-w-[300px] w-full  border-[1px] border-[#8080806a] box-border  pt-2 relative rounded-xl overflow-hidden"
            >
              <div className="w-[100px] h-[160px] mx-auto">
                <img
                  src={`${prevValue.image}`}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-[1.15rem] px-2 text-[#848484] font-semibold mt-4">
                {prevValue.Products_name}
              </p>
              <p className="text-[#a9b325] text-[.75rem] px-2 font-semibold ">
                All Life Stages<span> (All Breed Sizes)</span>
              </p>

              <div className="px-2 text-[#2f8a2fde]">
                Price: {prevValue.price} rs
              </div>

              <div className="bg-[#f1f2f2] text-[1rem] min-h-[38px] flex justify-center items-center text-[#402b3d] font-bold mt-4">
                Company Information:&nbsp;10/10
              </div>
              <div className="product-click relative text-[#c2d846]  bg-red-600 text-[.9rem] py-[10px] text-center cursor-pointer hover:bg-red-700 "
              onClick={()=> handleHidden(true,prevValue)}
              >
                Buy Product
              </div>
              <div className="absolute right-2 top-1 cursor-pointer" onClick={()=> handleCross(prevValue.id)}>&#10006;</div>
            </div>
          );
        })}
      </div>

      
      {isHidden && <section className={`${isHidden ? "containers" :" "}   fixed inset-0 flex justify-end  bg-[#04040463] z-30 `}>
      <div className="container-add relative w-[350px] p-5 border rounded-lg shadow-lg bg-[white] mr-1 place-content-center  ">
     
      <div className="absolute top-4 right-4 text-xl cursor-pointer"
      onClick={()=> handleHidden(false)}
      >
        &#x2716;
      </div>

      
      <div className="flex justify-center">
        <img
          src={hiddenValue.image}
          alt="Freeze Dried New Zealand Lamb"
          className="w-[120px] h-[160px] object-contain"
        />
      </div>

      
      <h2 className="text-2xl font-bold text-center mt-4">
        {hiddenValue.Products_name}
      </h2>

      
      <div className="flex justify-center mt-4">
        <div className="text-center mx-2">
          <p className="font-semibold">{hiddenValue.details1}</p>
          <p className="font-semibold">{hiddenValue.details2}</p>
          
        </div>
       
      </div>

      

      
      <div className="flex items-center justify-center mt-4">
        <button
          className="border px-4 py-1"
          onClick={() => handleQuantityChange("decrease")}
        >
          -
        </button>
        <span className="px-4 text-xl font-semibold">{quantity}</span>
        <button
          className="border px-4 py-1"
          onClick={() => handleQuantityChange("increase")}
        >
          +
        </button>
      </div>

      <p className="text-2xl font-bold text-center mt-4">{hiddenValue.price}</p>

      
      <Link to="/payment" className=" inline-block bg-yellow-500 text-white font-semibold w-[100px] h-10  rounded mt-10 mx-auto hover:bg-yellow-600 place-content-center px-[35px] flex items-center"
      >
         Buy
      </Link>
 
    </div>
    </section>}
    </main>
  );
}



