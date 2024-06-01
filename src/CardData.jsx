import React from "react";
import "./Backdrop.css"
 
function CardData(){
    return(
        <div className="CardD border-solid border-2 border-lite-gray-500 rounded-2xl ">
           <label htmlFor="name">Name : <input type="text" placeholder="enter your name" /></label><br/>
           <label htmlFor="name">Course : <input type="text" placeholder="enter your name" /></label><br/>
           <label htmlFor="name">Phone No :  <input type="text" placeholder="enter your name" /></label><br/>
           <label htmlFor="name">Email: <input type="email" placeholder="enter your name" /></label><br/>
           <label htmlFor="name">Password : <input type="password" placeholder="enter your name" /></label><br/>
        </div>
    )
}
export default CardData;