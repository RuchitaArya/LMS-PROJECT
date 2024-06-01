import React from "react";
import {createPortal} from "react-dom";
import "./Click.css"
import PComp1 from "./PComp1";
import PComp2 from "./PComp2";
 
function Click(){
    return(
        <>
        <div>{createPortal(<PComp1/>,document.getElementById("Click_Open"))}</div>
        </>
    );
}
export default Click;