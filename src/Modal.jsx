import React from "react";
import {createPortal} from "react-dom";
import Backdrop from "./Backdrop";
import CardData from "./CardData";
import "./Backdrop"
 
function Modal({BackdropClose}){
    return(
        <>
        <div>{createPortal(<Backdrop BackdropClose={BackdropClose}/>,document.getElementById("Back_Drop"))}</div>
        </>
    );
}
export default Modal;