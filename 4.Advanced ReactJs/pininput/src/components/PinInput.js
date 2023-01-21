import React, { useRef, useState } from 'react'
import "./PinInput.mudule.css" 
export const PinInput = ({length,size}) => {
    const [arr]=useState(new Array(length).fill(""))
    const ref=useRef([])
    console.log(ref)
const changeHandler=(e,i)=>{

}

  return <div>PinInput<br/>
{
    arr.map((e,i)=>{
       return <input onChange={changeHandler} maxLength={size} key={i} />
    })
}

  </div>
  
}
