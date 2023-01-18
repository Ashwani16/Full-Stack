import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ProductDetails(){
    const {id}=useParams()
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:3000/product/${id}`).then((res)=>{
            res.json().then((res)=>{
                setData(res)
            }).catch((err)=>{
                console.log("error",err)
            })
        }).catch((err)=>{
            console.log("error",err)
        })
    },[id])
    return <>
    <h1>{data.name}</h1>
    <h2>{data.price}</h2>
    </>
}