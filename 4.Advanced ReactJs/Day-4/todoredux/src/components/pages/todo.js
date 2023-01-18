import { useEffect } from "react"
import {Link} from "react-router-dom"
import Addto from "../Addto"
import List from "../List"
import axios from "axios"
import { useDispatch } from "react-redux"
import { Get_Res } from "../../redux/todo/Action"

export default function Item(){
    const dispatch=useDispatch()
    useEffect(()=>{
        axios.get(` http://localhost:4000/todos`).then((res)=>{
       
        dispatch(Get_Res(res.data))
        
        })
    },[])
    return <div>
        <h1>To-Do Item</h1>
        <Link to="/">Home</Link>
        <Addto/>
       <List/>
    </div>
}