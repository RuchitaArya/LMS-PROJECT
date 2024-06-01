import React from "react";
 import Card from "./Card";
 import { useState } from 'react'
 import PCard from "./PCard";
 import Modal from "./Modal";

function Completed(){
        const [open, setOpen] = useState(false);
        const abc=()=>{
          setOpen((prev)=>!prev );
        };
    return(
        <>
         <div>
         <PCard Modalopen={abc}/>
                {open && <Modal BackdropClose={abc}/>} 
             </div>
           </>
       

    )
}
export default Completed;