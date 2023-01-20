import { memo } from "react"
function check(pre,cur){
  //console.log("inPost Check",pre,pre.toggel.id==cur.toggel.id)
    return pre.verifyPost===cur.verifyPost&&pre.title===cur.title&&pre.body===cur.body//&&pre===cur&&pre===cur
}
const Post=memo(({title,body,verifyPost,id,toggel})=>{
    console.log("rendering-Post")
    return <div >
            <h3>{title}</h3>
            <p>{body}</p>
            <p>Varified: {verifyPost?"True":"False"}</p>
            <button onClick={()=>{toggel(id)}}>{verifyPost?"De-Verify":"Verify"}</button>
        </div>  
},check)
export default Post