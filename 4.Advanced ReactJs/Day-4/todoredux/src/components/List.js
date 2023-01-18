import { useState } from "react"
import { useSelector } from "react-redux"
import {Navigate} from "react-router-dom"
export default function List(){
    const [id,setId]=useState(null)
    const list =useSelector((state)=>{
        return state.todoreducer.list
    })

    if(id){
        return <Navigate to={`/todo/${id}/edit`} />
    }
    
    return <div>
        {list.map((e)=><div style={{display:"flex",gap:"20px",justifyContent:"center",alignItems:"center"}} key={e.id}>
            <h1>{e.task}</h1>
            {e.status?<p>Completed</p>:<p>Not-Completed</p>}
            <button onClick={()=>{setId(e.id)}}>edit</button>
        </div>)}
    </div>
}