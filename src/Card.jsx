import React from "react";


const Card = ({newObj,Modalopen})=>{                       
    return(
        <div className="Batch flex gap-2 flex-wrap">
            {newObj.map((val)=>{
                return(
                        <div className="flex gap-4">
                    <div className="CardSize border-solid border-2 shaow-2xl rounded-xl p-3">
                       <div><span className="mr-20">Frontend/Ruchi/.</span><button onClick={Modalopen}> View Detail <i class="fa-solid fa-chevron-right"></i></button></div>
                        <div className="mt-2"><h3>Course : {val.Course}</h3></div> 
                     <div><h3>Trainer : {val.Trainer}</h3></div>
                     <div><h3>StartDate : {val.StartDate}</h3></div>
                     <p className="mt-2">Timing 10:00 AM-12:00PM<span className="ml-20"><i class="fa-solid fa-user-graduate"></i>6</span></p>

                    </div>
                  </div>
                )
            })}
        </div>
    )
}

export default Card;