import React from "react";
import { BrowserRouter, Link, Routes, Route, Outlet} from "react-router-dom";
import Current from "./Current";
import GetCom from "./GetCom";

function TestModule(){
    return(
        <> 
        <div className=" flex gap-1 h-100 w-100 ml-5 mt-3">
        <Link to="AllTests"><button className="hover-button border-solid border-2 rounded-lg text-center m-2">All Tests</button></Link><br />
        <Link to="CTest"><button className="hover-button border-solid border-2 rounded-lg text-center m-2">Create Test</button></Link><br />
        <Link to="TestR"><button className="hover-button border-solid border-2 rounded-lg text-center m-2 ">Test Results</button></Link><br />
         </div>
         <div className="h-100 w-100 ml-5 mt-3"><Outlet/></div>
        </>
       
    )
} 
export default TestModule;