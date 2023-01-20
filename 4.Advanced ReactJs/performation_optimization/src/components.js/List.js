import { memo } from "react"
import Post from "./post"
function check(pre,cur){
   // console.log("inCheckmemo",pre)
        return pre.toggel===cur.toggel&&pre.list===cur.list
    }
const List=memo(({list,toggel})=>{
   
    console.log("rendering-List")
    return list.map((e)=>{
        return <Post key={e.id} toggel={toggel} {...e}/>
    })
},check)
export default List