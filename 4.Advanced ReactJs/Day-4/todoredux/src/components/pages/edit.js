import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import {Link} from "react-router-dom"
import {useParams,useNavigate} from "react-router-dom"
import { Delete_Res, Patch_Res } from "../../redux/todo/Action"
export default function Edit(){
    const navigate=useNavigate()
    const {id}=useParams()
    const dispatch=useDispatch()
    const [task]=useSelector((state)=>{
        return state.todoreducer.list.filter((e)=>{return e.id==id})
    })
function del(id){
    axios.delete(`http://localhost:4000/todos/${id}`)
    .then((res)=>{
        console.log(res)
        dispatch(Delete_Res(id))
        navigate("/todo/")
    })
}
function toggel(status){
   axios.patch(`http://localhost:4000/todos/${id}`,{status})
   .then((res)=>{
        console.log(res)
        dispatch(Patch_Res(res.data))
   })
}
    return <div>
        <h1>Edit Page {task.status}</h1>
        <Link to="/todo"> To-Do Page </Link>
        <h2>Your Task is to : {task.task}</h2>
        <h3>Your task has {task.status?"Completed":"Not Completed Yet"}</h3>
        <button onClick={()=>{del(task.id)}}>DELETE</button>
        <button onClick={()=>{toggel(!task.status)}}>Togel</button>
    </div>
}