// import React, { useContext, useState } from "react";

// import { TiTick } from "react-icons/ti";
// import { Link } from "react-router-dom";
// import { ContextData } from "../Context/ContextApi";

// export default function Home() {
//   const [index, setIndex] = useState(1);
//   const [products] = useContext(ContextData);
//   const object=1;

//   const [toggle, setToggle] = useState("true");
//   const food = [
//     {
//       value: "Dog Food",
//       id: 1,
//     },
//     {
//       value: "Cat Food",
//       id: 2,
//     },
//   ];
//   function handleClick(id) {
//     setIndex(id);
//   }

//   return (
//     <>
//       <main className="">
//         <div
//           className={`h-[660px]  bg-[url('dog_cat.jpg')] bg-no-repeat bg-cover flex justify-center items-center gap-10 `}
//         >
//           {food.map((prevValue) => {
//             return (
//               <div
//                 key={prevValue.id}
//                 className={`relative max-w-[300px] min-h-[60px] w-full text-[1.3rem] font-bold leading-[1.2rem]  flex justify-center items-center text-[#fff] rounded-lg ${
//                   index === prevValue.id
//                     ? "after:w-[30px] after:h-[30px] after:bg-[#C2D846] after:absolute after:transform after:rotate-45 after:-bottom-3 bg-[#C2D846]"
//                     : "bg-[#a2b0b36f] bg-opacity-90"
//                 }  cursor-pointer`}
//                 onClick={() => handleClick(prevValue.id)}
//               >
//                 {prevValue.value}
//               </div>
//             );
//           })}
//         </div>
//         <div className="bg-[#402b3d] min-h-[140px] text-[#fff] text-center text-[1.1rem] ">
//           <p className="text-[#C2D846] font-bold text-[1.5rem] pt-4">
//             Which food is best for my pet?
//           </p>
//           <p className="pt-2">
//             Discover the facts about your pet's food including nutritional
//             values, allergens{" "}
//           </p>
//           <p>
//             and even the ethics of the manufacturer. Fast, free and 100%
//             unbiased.
//           </p>
//         </div>

//         <div className="max-w-[90%]  mx-auto flex justify-between flex-wrap gap-10 mt-10">
//           {products.map((products) => {
//             return (
//               <Link
//                 key={products.id}
//                 to={`/info?image=${products.image}&object=${object}`}
//                 className="max-w-[300px] w-full  border-[1px] border-[#8080806a] box-border  pt-2"
//               >
//                 <div className="w-[100px] h-[160px] mx-auto">
//                   <img
//                     src={`${products.image}`}
//                     alt=""
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//                 <p className="text-[1.15rem] px-2 text-[#848484] font-semibold mt-4">
//                   {products.Products_name}
//                 </p>
//                 <p className="text-[#a9b325] text-[.75rem] px-2 font-semibold ">
//                   All Life Stages<span> (All Breed Sizes)</span>
//                 </p>
//                 <div className="grid grid-cols-2 gap-2 mt-5 mb-3">
//                   <button className="text-[.75rem] font-bold px-[8px] py-[10px] bg-[#f1f2f2]">
//                     {products.details1}
//                   </button>
//                   <button className="text-[.75rem] text-[#fdc41c] font-bold  px-[8px] bg-[#f1f2f2] py-[10px]">
//                     {products.details2}
//                   </button>
//                 </div>
//                 <div className="px-2 text-[#2f8a2fb1]">
//                   Price: {products.price}rs
//                 </div>
//                 <div className="flex justify-between items-center px-2">
//                   <div className="text-[.8rem] text-[gray] mt-4">
//                     Wheat Free
//                   </div>
//                   <div className="text-[#3ceb3c] text-[2rem]">
//                     <TiTick />
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center px-2">
//                   <div className="text-[.8rem] text-[gray] mt-4">
//                     Grain Free
//                   </div>
//                   <div className="text-[#3ceb3c] text-[2rem]">
//                     <TiTick />
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center px-2">
//                   <div className="text-[.8rem] text-[gray] mt-4">
//                     Hypoallergenic Principles
//                   </div>
//                   <div className="text-[#3ceb3c] text-[2rem]">
//                     <TiTick />
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center px-2">
//                   <div className="text-[.8rem] text-[gray] mt-4">
//                     Use Only Natural Preservatives
//                   </div>
//                   <div className="text-[#3ceb3c] text-[2rem]">
//                     <TiTick />
//                   </div>
//                 </div>

//                 <div className="bg-[#f1f2f2] text-[1rem] min-h-[38px] flex justify-center items-center text-[#402b3d] font-bold mt-4">
//                   Company Information:&nbsp;10/10
//                 </div>
//                 <div className="text-[#c2d846]  bg-[#402b3d] text-[.9rem] py-[10px] text-center cursor-pointer hover:bg-[#c2d846] hover:text-[#fff]">
//                   View Product
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </main>
//     </>
//   );
// }


import React, { useContext, useState } from "react";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import { ContextData } from "../Context/ContextApi";

export default function Home() {
  const [index, setIndex] = useState(1);
  const [products] = useContext(ContextData);
  const object = 1;

  const food = [
    { value: "Dog Food", id: 1 },
    { value: "Cat Food", id: 2 },
  ];

  function handleClick(id) {
    setIndex(id);
  }

  return (
    <main className="flex flex-col">
      <div className="background h-[660px]  flex justify-center items-center gap-10 p-4">
        {food.map((prevValue) => (
          <div
            key={prevValue.id}
            className={`relative max-w-[300px] min-h-[60px] w-full text-[1.3rem] font-bold leading-[1.2rem] flex justify-center items-center text-[#fff] rounded-lg ${
              index === prevValue.id
                ? "after:w-[30px] after:h-[30px] after:bg-[#C2D846] after:absolute after:transform after:rotate-45 after:-bottom-3 bg-[#C2D846]"
                : "bg-[#a2b0b36f] bg-opacity-90"
            } cursor-pointer`}
            onClick={() => handleClick(prevValue.id)}
          >
            {prevValue.value}
          </div>
        ))}
      </div>

      <div className="bg-[#402b3d] min-h-[140px] text-[#fff] text-center text-[1.1rem] p-4">
        <p className="text-[#C2D846] font-bold text-[1.5rem]">
          Which food is best for my pet?
        </p>
        <p>
          Discover the facts about your pet's food including nutritional values,
          allergens
        </p>
        <p>
          and even the ethics of the manufacturer. Fast, free and 100% unbiased.
        </p>
      </div>

      <div className="max-w-[90%] mx-auto flex flex-wrap justify-center gap-10 mt-10">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/info?image=${product.image}&object=${object}`}
            className="max-w-[300px] w-full border border-[#8080806a] box-border pt-2 bg-white"
          >
            <div className="w-[100px] h-[160px] mx-auto">
              <img
                src={product.image}
                alt={product.Products_name}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-[1.15rem] px-2 text-[#848484] font-semibold mt-4">
              {product.Products_name}
            </p>
            <p className="text-[#a9b325] text-[.75rem] px-2 font-semibold">
              All Life Stages (All Breed Sizes)
            </p>
            <div className="grid grid-cols-2 gap-2 mt-5 mb-3">
              <button className="text-[.75rem] font-bold px-[8px] py-[10px] bg-[#f1f2f2]">
                {product.details1}
              </button>
              <button className="text-[.75rem] text-[#fdc41c] font-bold px-[8px] py-[10px] bg-[#f1f2f2]">
                {product.details2}
              </button>
            </div>
            <div className="px-2 text-[#2f8a2fb1]">
              Price: {product.price}rs
            </div>
            {[
              "Wheat Free",
              "Grain Free",
              "Hypoallergenic Principles",
              "Use Only Natural Preservatives",
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center px-2">
                <div className="text-[.8rem] text-[gray] mt-4">{item}</div>
                <div className="text-[#3ceb3c] text-[2rem]">
                  <TiTick />
                </div>
              </div>
            ))}
            <div className="bg-[#f1f2f2] text-[1rem] min-h-[38px] flex justify-center items-center text-[#402b3d] font-bold mt-4">
              Company Information: &nbsp; 10/10
            </div>
            <div className="text-[#c2d846] bg-[#402b3d] text-[.9rem] py-[10px] text-center cursor-pointer hover:bg-[#c2d846] hover:text-[#fff]">
              View Product
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
