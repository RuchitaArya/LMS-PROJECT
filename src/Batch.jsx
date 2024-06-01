
import { Link,Outlet } from "react-router-dom";

import Card from "./Card";


 
const Batch=()=>{                      
     return(
       <>     
       <div className="searchBox border-solid border-2 border-lite-gray-500 rounded-2xl p-2 mt-5"><i class="fa-solid fa-magnifying-glass fa-lg"></i>
        <input type="text" placeholder="search"className="search border-none  
     outline-none  text-center "/></div><br />
     <div className=" flex ">
     <Link to="Current"><button className="hover-button border-solid border-2 rounded-lg text-center ">Current</button></Link><br />
     <Link to="upcoming"><button className="hover-button border-solid border-2 rounded-lg text-center ">Upcoming</button></Link><br />
     <Link to="PCard"><button className="hover-button border-solid border-2 rounded-lg text-center ">Completed</button></Link><br />

         </div>
         <div className="mt-4"><Outlet/></div>
        </>
        
       
    )
}

export default Batch;