import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { get_todo } from "../redux/action"

export default function AddToDo(){
    const dispatch=useDispatch()
    const [text,setText]=useState("")
    const add_todo=(obj)=>(dispatch)=>{
        return axios.post(`http://localhost:8080/posts`,obj).then((res)=>{
            get_todo(dispatch)
        })
    }
    const clickHandler=()=>{
    let obj={
        todo: text,
      status: false
    }
    dispatch(add_todo(obj)).then((res)=>{
        get_todo(dispatch)
        console.log("posted succesfully");
    })
        
    }
    return <div>
        <input value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="enter todo"/>
        <button onClick={clickHandler} >AddToDo</button>
    </div>
}