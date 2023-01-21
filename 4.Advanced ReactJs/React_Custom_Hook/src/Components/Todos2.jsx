import React from 'react'
import { useState } from 'react'
import { useTodos } from '../hooks/useTodos'

const Todos2 = ({initialData}) => {
   //use the initialData that you are getting from the props to be used, as the initial argument for useTodos hook
    const {data,addData,clearData,removeDataByIndex} = useTodos(initialData)
   const [text,setText]=useState("")
   const changeHandler=(e)=>{
    setText(e.target.value)
   }
  return (
    <div data-testid='todos2'>
        <h1 data-testid='todos2-label'>Todos-2</h1>
        <input onChange={changeHandler} value={text} data-testid='todos2-input'/>
        <button data-testid='todos2-add' onClick={()=>{addData(text)}}>Add Task</button>
        <div>
       {/* Loop through the todo data that you are getting from the useTodos hook to render the tasks with their name, and a delete button with each task */}
         
                  {data.map((e,i)=>{
                    return  <div key={i}>
                      <div  data-testid='todos2-element'>
                    <p>{e}</p>
                    <button onClick={()=>{removeDataByIndex(i)}} data-testid='todos2-delete' >Delete</button>
                    </div>
                    </div>
                  })}
                
            
    
        </div>
        <button onClick={clearData} data-testid='todos2-clear' >Clear Todos</button>
    </div>
  )
}

export default Todos2