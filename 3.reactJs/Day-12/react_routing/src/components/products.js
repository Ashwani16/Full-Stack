import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Products(){
    const [searchParams, setSearchParams]=useSearchParams()
    const [data,setData]=useState([])
    var pageNo=Number(searchParams.get("page"))
    if(!pageNo || pageNo===0 || pageNo<1){
        pageNo=1;
    }
   
    console.log(pageNo)
    const [page,setPage]=useState((pageNo))
    useEffect(()=>{
        fetch(` http://localhost:3000/product?_page=${page}&_limit=2`).then((res)=>{
            res.json().then((res)=>{
                 setData(res)
            })
        })
       // console.log("clicked in")
    },[page])
   
    useEffect(()=>{
       setSearchParams({page})
      
    },[page])
    const style={
        display:"flex",
        justifyContent:"center",
        width:"60%",
        margin:"auto",
        
    }
    function clicked(x){
        
        setPage(page+x)
    }
    return <><div>
            {data.map((e)=>{
                return <div style={style} key={e.id}>{e.name}--{e.price}--<Link to={`/products/${e.id}`} >show more</Link></div>
            })}
            <div style={{...style,marginTop:"40px"}}>
            <button disabled={page<2?true:false} onClick={()=>{clicked(-1)}}>-</button>
    <button disabled>{page}</button>
    <button onClick={()=>{clicked(1)}}>+</button>
            </div>
             
    </div>
   
    </>
}