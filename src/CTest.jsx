import React from "react";
 

function CTest(){
    return(
        <div className="CTest p-4">
          <p className="mt-3"><label htmlFor="">Test Name <input type="text" className="ml-40"/></label></p> 
           <p className="mt-3"> <label htmlFor="">Test Duration(minutes) <input type="text" className="ml-20" /></label></p>
          <p className="mt-3"><label htmlFor="">Setect Course <select name="" id="" >
          <option value="">Select Courcse</option>
            <option value="">REACT.JS</option>
            <option value="">PYTHON</option>
            <option value="">JAVA SCRIPT</option>
            <option value="">FULL STACK</option>
            <option value="">DIGITAL MARKTING</option>
            </select></label></p>
        </div>
    )
}
export default CTest;