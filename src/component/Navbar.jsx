// import React, { useContext, useState } from "react"
// import Home from "./Home"
// import { RiYoutubeLine } from "react-icons/ri";
// import { FaTwitter } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa6";
// import { NavLink } from "react-router-dom";
// import { ContextData } from "../Context/ContextApi";
// import Popup from "./Popup";

// export default function Navbar(){
//   const[isModal, setModal]= useState(false)

//   function handleModal(event){
    
//     setModal(true)
//     event.stopPropagation();
//   }

//   return(
//     <div className="bg-[#463243e7] min-h-[80px] flex fixed w-full backdrop-blur-[12px] z-10">
//     <nav className=" flex items-center max-w-[90%] mx-auto justify-between w-full">
//       <section className="flex items-center gap-20">
//         <div className="w-[200px]">
//           <img src="logo.svg" alt="" className="w-full" />
//         </div>
      

//       <div className="flex text-[#c2d846] gap-5 text-[1.1rem] ">
//         <NavLink to="/">How We Score</NavLink>
//         <NavLink to="/about">About</NavLink>
//         <div className="cursor-pointer" onClick={(event)=> handleModal(event)}>Contact
//         {isModal && <Popup setModal={setModal}/>}
//         </div>
        
        
//       </div>
//       </section>
      

//       <div className="text-[#fff] flex gap-10 text-[1.1rem]">
//         <div className="text-[1.3rem]"><RiYoutubeLine/></div>
//         <div><FaTwitter/></div>
//         <div><FaFacebookF/></div>
//         <div><FaLinkedinIn/></div>
//       </div>
//     </nav>    
//     </div>

//   )
// }

import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiYoutubeLine } from 'react-icons/ri';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import Popup from './Popup'; // Assuming Popup is your modal component
import { ContextData } from '../Context/ContextApi';

export default function Navbar() {
  const [isModal, setModal] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [products, handleCheck, newProduct, handleCross, RegisterCheck, setRegister,isOpen,setOpen] = useContext(ContextData);

  const handleModal = (event) => {
    event.stopPropagation();
    setModal(!isModal);
  };

  return (
    <>
    {isOpen && <div className="bg-[#463243e7] min-h-[80px] flex fixed w-full backdrop-blur-[12px] z-10">
      <nav className="flex items-center max-w-[90%] mx-auto justify-between w-full">
        <div className="flex items-center gap-5 sm:gap-10">
          <div className="w-[150px]">
            <img src="logo.svg" alt="Logo" className="w-full" />
          </div>

          <div className={`flex-col sm:flex-row gap-5 text-[#c2d846] text-[1.1rem] ${isMenuOpen ? 'flex' : 'hidden'} sm:flex`}>
            <NavLink to="/" className="hover:text-[#fff] transition duration-200">How We Score</NavLink>
            <NavLink to="/about" className="hover:text-[#fff] transition duration-200">About</NavLink>
            <div className="cursor-pointer" onClick={handleModal}>
              Contact
              {isModal && <Popup setModal={setModal} />}
            </div>
          </div>

          {/* Hamburger menu icon for mobile */}
          <button
            className="sm:hidden flex items-center text-[#c2d846] p-2"
            onClick={() => setMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <div className="hidden sm:flex gap-10 text-[#fff] text-[1.1rem]">
          <div className="text-[1.3rem] hover:text-[#c2d846] transition duration-200"><RiYoutubeLine /></div>
          <div className="hover:text-[#c2d846] transition duration-200"><FaTwitter /></div>
          <div className="hover:text-[#c2d846] transition duration-200"><FaFacebookF /></div>
          <div className="hover:text-[#c2d846] transition duration-200"><FaLinkedinIn /></div>
        </div>
      </nav>

      {/* Mobile social icons */}
      {isMenuOpen && (
        <div className="sm:hidden flex justify-between p-4 bg-[#463243e7]">
          <div className="flex gap-4">
            <div className="text-[1.3rem] hover:text-[#c2d846] transition duration-200"><RiYoutubeLine /></div>
            <div className="hover:text-[#c2d846] transition duration-200"><FaTwitter /></div>
            <div className="hover:text-[#c2d846] transition duration-200"><FaFacebookF /></div>
            <div className="hover:text-[#c2d846] transition duration-200"><FaLinkedinIn /></div>
          </div>
        </div>
      )}
    </div>}
    </>
  );
}
