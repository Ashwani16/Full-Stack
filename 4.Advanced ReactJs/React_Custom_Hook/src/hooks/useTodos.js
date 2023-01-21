import { useState } from "react"

//get the data parameter here, and you can store it in a local useState.
export const useTodos = (arr=['Task1']) => {
const [data,setdata]=useState(arr)
    const addData = (todo) => {
        setdata([...data,todo])
    }

    const clearData = () => {
        setdata([])
    }

    const removeByIndex = (index) => {
        setdata((da)=>da.filter((e,i)=>i!=index))
    }

    return {
        data,
        addData, 
        clearData, 
        removeDataByIndex: removeByIndex,
    }
}