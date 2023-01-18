import { useEffect } from "react";
import AddToDo from "./add";

import {shallowEqual, useDispatch, useSelector} from "react-redux"
import { Get_req, get_todo } from "../redux/action";

export default function List(){
    const dispatch=useDispatch()
    const {list,isLoading}=useSelector((state)=>{return {list:state.todos,isLoading:state.isLoading}},shallowEqual)
    
   
    useEffect(()=>{
        dispatch(Get_req())
       // get_todo(dispatch)
       dispatch(get_todo)
    },[])
    //console.log(isLoading);
    return <div>
        <AddToDo />
        <div>
            <h1>Todo List</h1>
            {isLoading&&<h1>...Loading</h1>}
            {list?.map((e)=><h5 key={e.id}>{e.todo}-------{e.status?"true":"false"}</h5>)}
        </div>
    </div>

}