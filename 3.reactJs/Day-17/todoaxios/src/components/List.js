import { useEffect, useState } from "react"
import { deleteApiData, getApiData, updateApiData } from "../utils/api"

export default function List({reload}){
    const [List,setList]=useState([])
    const [page,setpage]=useState(1);
    const [totalPage,setToatalPage]=useState(0)
    const [loading,setLoading]=useState(false)
    function getData(){
        setLoading(true)
        getApiData(page).then((res)=>{console.log(res)
            setLoading(false)
            setList(res.data)
            setToatalPage(res.headers["x-total-count"])
        })
    }
    useEffect(()=>{
        getData()
    },[page,reload])

    function del(id){
        deleteApiData(id).then((res)=>{
            getData()
        })
    }
    function up(id,data){
        updateApiData(id,data).then((res)=>{
            getData()
        })
    }
    return <div>
        <h1>List</h1>
        <h1>{loading && "...loading"}</h1>
        {List.map((e)=>{return <div style={{display:"flex",margin:"20px", justifyContent:"center",gap:"30px"}} key={e.id}><h5>{e.work}</h5>
        <button onClick={()=>{up(e.id,!e.status)}}>{e.status?"Completed":"Not-Completed"}</button>
        <button onClick={()=>{del(e.id)}}>Delete</button>
        </div>})}
        <div>
            <button disabled={page<=1} onClick={()=>{setpage(page-1)}}>-</button>
            <button disabled>{page}</button>
            <button disabled={page>=Math.ceil(totalPage/2)} onClick={()=>{setpage(page+1)}}>+</button>
        </div>
       
    </div>
}