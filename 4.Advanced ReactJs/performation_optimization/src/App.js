import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Input from './components.js/Input';
import List from './components.js/List';
const takeTime=()=>{
  console.log("...wait")
    setTimeout(()=>{
      console.log("done")
    },4000)
}
const initialState=[{
  id:1,
  title:"title1",
  body:"post1",
  verifyPost: false
},{
  id:2,
  title:"title2",
  body:"post2",
  verifyPost: false
},{
  id:3,
  title:"title3",
  body:"Post3",
  verifyPost: false
}]
function App() {
  const [timer,setTimer]=useState(0);
  const [list,setList]=useState(initialState)
  const run=useMemo( takeTime,[])
  const toggel=useCallback((id)=>{
    for(let i=0;i<list.length;i++){
      
      if(list[i].id==id){
        list[i].verifyPost=!list[i].verifyPost;
        setList([...list])
      // setList((pre)=>[...pre,pre[i]={...pre[i],[pre[i].verifyPost]:!pre[i].verifyPost}])
      }
    }
},[list])
useEffect(()=>{
  console.log(list)
},[list])
  console.log("rendering-App")
  useEffect(()=>{
    setInterval(() => {
      setTimer((t)=>t+1)
    }, 1000);
  },[])
  return (
    <div className="App">
      <h3>Timer: {timer}</h3>
      <Input setList={setList} />
      <List toggel={toggel} setList={setList} list={list}/>
    </div>
  );
}

export default App;
