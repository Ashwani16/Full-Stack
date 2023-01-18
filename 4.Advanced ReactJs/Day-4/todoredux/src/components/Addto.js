import { useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { Post_Res } from "../redux/todo/Action"
export default function Addto(){
    const [text,setText]=useState("")
    const dispatch=useDispatch()
function clickHandler(){
    let obj={
        task:text,
        status:false,
    }
    setText("")
    axios.post(`http://localhost:4000/todos`,obj)
    .then((res)=>{
        dispatch(Post_Res(res.data))
        console.log(res.data)
    })
  
}
    return <div>
        <label>Task</label>
        <input onChange={(e)=>{setText(e.target.value)}} value={text} placeholder="enter task"/>
        <button onClick={()=>{clickHandler()}}>add</button>
    </div>
}