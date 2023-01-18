
import { useState } from "react"
import {postApi} from "../utils/api"
export default function AddTo({reload,setreload}){
    const [todo,setTodo]=useState({work:"",status:false})
 function changeHandler(e){
    setTodo({...todo,[e.target.name]:e.target.value})
    
 }   
 function clickHandler(e){
        e.preventDefault();
        postApi(todo).then((res)=>{
            setTodo({work:"",status:false})
            setreload(!reload)
        })
 }

    return <div>
        <input name="work" value={todo.work} onChange={changeHandler} placeholder="Enter work to do"/>
        <input onClick={clickHandler} type="submit"  />
    </div>
}