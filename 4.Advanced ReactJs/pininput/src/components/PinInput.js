import React, { useRef, useState } from 'react'
import "./PinInput.mudule.css" 
export const PinInput = ({length,size}) => {
    const [arr]=useState(new Array(length).fill(""))
    const ref=useRef([])
    const [text,setText]=useState("")

const next=(i)=>{
        ref.current[i].focus()
}    
const changeHandler=(e,i)=>{
    if(i<length-1){
        arr[i]=e.key
        next(i+1)
    }
    if(i>=0 && e.keyCode==8){
        next(i-1)
    }
   
    setText(arr.join(""))

    
  
}
const copyHandler=(e)=>{
    let data=e.clipboardData.getData("Text").split("").filter((e,i)=>i<length)
    setText(data)
    ref.current[data.length-1].focus()
    data.forEach((e,i) => {
       ref.current[i].value=e 
    });
}
  return <div>PinInput<br/>
{
    arr.map((e,i)=>{
       return <input ref={(e)=>ref.current[i]=e} onPaste={(e)=>{copyHandler(e)}} key={i} onKeyUp={(e)=>{changeHandler(e,i)}} maxLength={size}  />
    })
}

  </div>
  
}
