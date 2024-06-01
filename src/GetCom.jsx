import React from "react";
import {Link, Routes, Route} from "react-router-dom";
import Resource from "./Resource";
import TestModule from "./TestModule";
import Current from "./Current"
import Upcoming from "./Upcoming";
import AllTests from "./AllTests";
import CTest from "./CTest";
import TestR from "./TestR";
import PCard from "./PCard";
import Batch from "./Batch";
import Module from "./Module";


function GetCom(){
    return(
           <div className="GetCom flex gap-1 flex-wrap"> 
           <div className=" h-100 w-50 border-solid border-2 border-light-gray-500 rounded-lg shadow-2xl ">
          <Link to="/Module"><button className="hover-button" ><i class="fa-solid fa-users fa-lg ml-3 mt-5"></i>    Module</button></Link><br />
          <Link to="/Batch"><button className="hover-button" ><i class="fa-regular fa-address-book fa-lg ml-3"></i>  Batch</button></Link><br />
           <Link to="/testModule"><button className="hover-button"><i class="fa-solid fa-book-open-reader fa-lg ml-3"></i> Test Module</button></Link> <br />
            <Link to="/resource"><button className="hover-button"><i class="fa-solid fa-book-bookmark fa-lg ml-2"></i>  Resource</button></Link><br />
            </div>
            <div className="h-100 w-80 ">
            <Routes>
            <Route index element={<Module/>}></Route>
            <Route path="/Module" element={<Module />}></Route>
            <Route path="/Batch" element={<Batch />}>
              <Route index element={<PCard/>}></Route>
              <Route path="Current" element={<Current/>}></Route>
              <Route path="upcoming" element={<Upcoming/>}></Route>
            <Route path="PCard" element={<PCard/>}></Route>
            </Route>
            <Route path="/testModule" element={<TestModule/>}>
            <Route index element={<AllTests/>}></Route>
            <Route path="AllTests" element={<AllTests/>}></Route>
          <Route path="CTest" element={<CTest/>}></Route>
          <Route path="TestR" element={<TestR/>}></Route>
       
         </Route>
            <Route path="/Resource" element={<Resource/>}></Route>
           </Routes>
           </div>
            </div>
    )
}
export default GetCom;