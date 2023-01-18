import React from "react"
import Button from "./Components/button";
import './App.css';
 function fechedData(page=1){
  //console.log(page)
  return fetch(`http://localhost:3000/list?_page=${page}&_limit=2`).then((res)=>{return res.json()})
}
function PostData(text){
  let obj={
    title: text,
    status:0 
  }
 fetch(`http://localhost:3000/list`,{
    method:"POST",
    headers: {
      "Content-Type": "application/json"
 },
 body: JSON.stringify(obj)
  }).then((res)=>{console.log("posted") }).catch((er)=>{
    console.log("error in post- "+er)
  })
}
function patchData(id,s){
  let obj={
    status:s==1?0:1 
  }
 fetch(`http://localhost:3000/list/${id}`,{
    method:"PATCH",
    headers: {
      "Content-Type": "application/json"
 },
 body: JSON.stringify(obj)
  }).then((res)=>{console.log("updated") }).catch((er)=>{
    console.log("error in post- "+er)
  })
}
 function delData(id,s){
  let obj={
    status:s==1?0:1 
  }
 fetch(`http://localhost:3000/list/${id}`,{
    method:"DELETE",
    headers: {
      "Content-Type": "application/json"
 }
  }).then((res)=>{console.log("deleted") }).catch((er)=>{
    console.log("error in delete- "+er)
  })
}
function App() {
  const [count,setCount]=React.useState(1)
  const [loading,setLoading]=React.useState(false)
  const [list,setlist]=React.useState([])
  const [sync,setSync]=React.useState(false)
  React.useEffect(()=>{
    setLoading(true)
    fechedData(count).then((res)=>{
     // console.log("in use State",res)
      setlist(res)
      
      setLoading(false)
    })
  },[count])
  function inc(){
    setCount(count+1)
  }
  function dec(){
    setCount(count-1)
  }
  function add(){
    let text=document.querySelector("#add").value
    PostData(text)
    setLoading(true)
    fechedData(count).then((res)=>{
     // console.log("in use State",res)
      setlist(res)
      
      setLoading(false)
    })
  }
  function patch(id,s){
    patchData(id,s)
    setLoading(true)
    fechedData(count).then((res)=>{
     // console.log("in use State",res)
      setlist(res)
      
      setLoading(false)
    })
  }
  function del(id,s){
    delData(id,s)
    setLoading(true)
    fechedData(count).then((res)=>{
     // console.log("in use State",res)
      setlist(res)
      
      setLoading(false)
    })
  }
//   list.map((e)=>{
// console.log(e.id)  })
  return (
    <div className="App">
      <h1>To Do App</h1>
      <input id="add" placeholder="eneter new work"/>
      <Button  text="Add" onclick={add} />
      {loading?<h1>loading</h1>:list.map((e)=>{
        return <div key={e.id+Math.random()}>
          <h3 >{e.title}</h3>
         
          <Button onclick={()=>{patch(e.id,e.status)}} style={{backgroundColor:e.status===0?"red":"green"}} text={e.status===0?"Not-Completed":"Completed"}/>
          <Button onclick={()=>{del(e.id,e.status)}} text="Delete" />
        </div>
      })
    }
    
    <Button disabled={count==1} onclick={dec} text="-" />
    <Button disabled={true}  text={count}/>
    <Button  onclick={inc} text="+" />
    </div>
  );
}

export default App;
