import React, { useContext } from "react";
import { ContextData } from "../Context/ContextApi";
import AdminNavbar from "./AdminNavbar";
import { Outlet } from "react-router-dom";

export default function Admin() {
  // Use useContext to access the shared context data
  const [products, handleCheck, newProduct, handleCross, RegisterCheck, setRegister] = useContext(ContextData);
  console.log(products)
  console.log(RegisterCheck)
  return (
    <div>
      <AdminNavbar />
      <div className="p-4 sm:ml-64">  
        <Outlet />
      </div>
    </div>
  );
}
