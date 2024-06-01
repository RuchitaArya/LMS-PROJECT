import React from "react";
import "./Click.css"
import PComp2 from "./PComp2";

function PComp1(){
    return(
        <div className="BackD">
     <div className="MiniCard">
     <div className="text-center "><i class="fa-solid fa-registered fa-2xl"></i></div>
    <div className="Mini">
        
    <span className="text_size">Ruchi Arya</span>
    <p>aryaruchi239@gmail.com</p>
    <p>34234373874</p>
    </div>
    <div className="mt-4 ml-5 "><i class="fa-regular fa-comments fa-lg"></i>Chat Support <span className="amgle1"><i class="fa-solid fa-angle-right "></i></span></div>
    <div className="mt-4 ml-5 "><i class="fa-solid fa-circle-question fa-lg"></i>  Help Back<span className="amgle2"><i class="fa-solid fa-angle-right "></i></span></div>
    <div className="logout mt-4 ml-5 p-2"><i class="fa-solid fa-right-from-bracket fa-lg ml-1 "></i>  Logout<span className="amgle3"><i class="fa-solid fa-angle-right "></i></span></div>
    </div>
    
    
    </div>
         
    
    )
}
export default PComp1;