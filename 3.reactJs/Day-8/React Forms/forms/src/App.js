import { useEffect, useRef, useState } from 'react';
import './App.css';
import List from "./components/list";
import {delFromApi,getfromapi,setToapi} from "./utils/api";
import Pages from './components/Pages';
function App() {
  let obj={
    name:"",
    age:"",
    address:"",
    department:"",
    salary:"",
    ismaried:false,
    img:""
  }
  const [sortby,setSortby]=useState("")
  const [filterby,setFilterby]=useState("")
  const [loading,setLoading]=useState(false)
  const [list,setList]=useState([])
  const [userData,setUserData]=useState({...obj});
  const {name,age,address,department,salary,ismaried,img}=userData
  const [page,setpage]=useState(1)
  function getList(page,sortby,filterby){
  getfromapi({page:page,filterby:filterby,sortby:sortby}).then((res)=>{
  setList(res)                                    
  setLoading(false)
    }) 
  }

  function onDelete(id){
    setLoading(true)
    delFromApi(id).then((res)=>{
      getList()
    })
    
  }

  useEffect(()=>{
    
    setLoading(true)
    getList(page,sortby,filterby) 
   
  },[page,sortby,filterby])
  
function submitHandler(e){
  setLoading(true)
    e.preventDefault()
    setToapi(userData).then((r)=>{
      getList()
    })
    
    setUserData(obj)
  }
  
function changeHandler(e){
  let value = e.target.name==="ismaried"?e.target.checked:e.target.value
  setUserData({...userData,[e.target.name]:value})
}
function inc(){
  setpage((p)=>p+1)
}
function dec(){
  setpage((p)=>p-1)

}
function sortHandeler(e){
  setSortby(e.target.value)
}
function filterHandler(e){
  console.log(e.target.value)
  setFilterby(e.target.value)

}



  return (
    <div className="App">
    <form onSubmit={submitHandler}>
      <input name='name' onChange={changeHandler} value={name} type="text" placeholder='enter name'/><br/>
      <input name='age' onChange={changeHandler} value={age} type="number" placeholder='enter age'/><br/>
      <input name='address' onChange={changeHandler} value={address} type="text" placeholder='enter address'/><br/>
      <select name='department' onChange={changeHandler} value={department}>
        <option value="">
              select department
        </option>
        <option value="full">FSD</option>
        <option value="front">Front-end</option>
        <option value="back">Back-end</option>
      </select><br/>

      <input name='salary' onChange={changeHandler} value={salary} type="number" placeholder='enter your salary'/><br/>
      <label>Maried</label>
      <input name='ismaried' onChange={changeHandler} value={ismaried} type="checkBox" /><br/>
      <input name='img' onChange={changeHandler} value={img} type="link" placeholder='enter image link' /><br/>
      <input type="submit"></input>
    </form>
    <select onChange={filterHandler}>
      <option value="">all Cetegory</option>
      <option value="full">FSD</option>
      <option value="front">Front-end</option>
      <option value="back">Back-end</option>
    </select>
    <select onChange={sortHandeler}>
      <option value="">sort by salary</option>
      <option value="asc">Low to High</option>
      <option value="desc">High to Low</option>
    </select>
    <List data={list} loading={loading} onDelete={onDelete}/>
    <Pages page={page} inc={inc} dec={dec}/>
    </div>
  );
}

export default App;
