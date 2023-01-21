import React from 'react'
import { useState } from 'react'
import { useTodos } from '../hooks/useTodos'

const Todos1 = ({initialData}) => {
  const {data,addData,clearData,removeDataByIndex} = useTodos(initialData)
  const [text,setText]=useState("")
  const changeHandler=(e)=>{
   setText(e.target.value)
  }
  //use the initialData that you are getting from the props to be used, as the initial argument for useTodos hook
  return (
    <div data-testid='todos1'>
        <h1 data-testid='todos1-label'>Todos-1</h1>
        <input onChange={changeHandler} data-testid='todos1-input'/>
        <button onClick={()=>{addData(text)}} data-testid='todos1-add'>Add Task</button>
      <div>
       {data.map((e,i)=>{
        return <div key={i}>
        <div data-testid='todos1-element'>
          {/* Task name here */}<p>{e}</p>
        </div>
        <button onClick={()=>{clearData(i)}} data-testid='todos1-delete' >Delete</button>
    </div>
       })}
            
      
        </div>
        <button onClick={removeDataByIndex} data-testid='todos1-clear' >Clear Todos</button>
    </div>
  )
}

export default Todos1