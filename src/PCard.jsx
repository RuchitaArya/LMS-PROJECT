import React, { useState, useRef } from "react";
import { Link,Outlet } from "react-router-dom";
import img1 from "./assets/react.svg";
import Card from "./Card";
const PCard=(props)=>{                       
    let OBJECT =[
        { Course: "Full Stack",Trainer:"Ruchi@rya",StartDate:"23Jan,2024 To may30 2024"},
        { Course: "Full Stack",Trainer:"Ruchi@rya",StartDate:"23Jan,2024 To may30 2024"},
        { Course: "Full Stack",Trainer:"Ruchi@rya",StartDate:"23Jan,2024 To may30 2024" },
        { Course: "Full Stack",Trainer:"Ruchi@rya",StartDate:"23Jan,2024 To may30 2024" },
        { Course: "Full Stack",Trainer:"Ruchi@rya",StartDate:"23Jan,2024 To may30 2024"},
        { Course: "Full Stack",Trainer:"Ruchi@rya",StartDate:"23Jan,2024 To may30 2024"},
        { Course: "Full Stack",Trainer:"Ruchi@rya",StartDate:"23Jan,2024 To may30 2024"},
    ];
    let [value, setValue] =useState([
        { Course: "Full Stack",Trainer:"Ruchi@rya",StartDate:"23Jan,2024 To may30 2024" },
        { Course: "Full Stack",Trainer:"Ruchi@rya",StartDate:"23Jan,2024 To may30 2024" },
        { Course: "Full Stack",Trainer:"Ruchi@rya",StartDate:"23Jan,2024 To may30 2024" },
        { Course: "Full Stack",Trainer:"Ruchi@rya",StartDate:"23Jan,2024 To may30 2024" },
        {Course: "Full Stack",Trainer:"Ruchi@rya",StartDate:"23Jan,2024 To may30 2024" },
        {Course: "Full Stack",Trainer:"Ruchi@rya",StartDate:"23Jan,2024 To may30 2024" },
    ]);
    const inputValue = useRef();
    const getVal = ()=>{
    value=inputValue.current.value.toLowerCase();
    let item=OBJECT.filter((elem)=>{
        let keys=OBJECT.keys(elem);
        for(let i=0; i < keys.length; i++){
            let v=keys[i];
            if(String(elem[v]).toLocaleLowerCase().includes(value)){
                return elem;
            }
        }
    });
    setValue(item);
       };
     return(
       <>     
        <div><Card newObj={value} Modalopen={props.Modalopen} ></Card></div>
        </>
    )
}

export default PCard;