import { useState } from "react";

const Input=({setList})=>{
    const [title,setTitle]=useState("");
    const [body,setBody]=useState("")
    const clickHandler=()=>{
        let obj={
        id:Date.now(),
        title,
        body,
        verifyPost: false
     
    }
    setList((prev)=>[...prev,obj])


    }
    return <div>
        <input onChange={(e)=>{setTitle(e.target.value)}} placeholder="Title"/>
        <input onChange={(e)=>{setBody(e.target.value)}} placeholder="posts"/>
        <button onClick={clickHandler}>Post</button>
    </div>
}
export default Input;