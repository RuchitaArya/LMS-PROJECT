import React, { useState } from "react";
import img from "./pictures/logo.jpg";
import "./Project.css"
import Click from "./Click";
 
 function Header() {
   const [oPne, setoPne]= useState(false);
   const xyz=()=>{
      setoPne((prev)=>!prev);
   }                       
    return(
       <>
       <div className="flex gap-2 shadow-xl header">
       <div><img src={img}  alt="" className="logo ml-40"/></div>
      <div className="HeaderGap mt-9"><i class="fa-regular fa-bell fa-flip-horizontal fa-xl"></i></div>
         <div className="mt-9"><i class="fa-solid fa-circle-h fa-2xl"></i></div>
         <h3 className="mt-9">Hello, Ruchi</h3>
        <div className="mt-9" onClick={xyz}>< i class="fa-solid fa-angle-down fa-xl"></i></div>
       </div>
       {oPne && <Click/>}
       </>                      
    )
}
export default Header;