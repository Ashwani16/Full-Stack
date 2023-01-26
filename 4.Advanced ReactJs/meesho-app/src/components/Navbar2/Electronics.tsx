
import {useState} from "react"

const Electronics=()=>{
    const [isShown,setIsShown]=useState<Boolean>(false)
    return <div className="sm"> 
    <div className="smd" >
        <h3>Mobile & Accessories</h3>
        <p>All Mobile & Accessories</p>
         <p>Smartwatches</p>
         <p>Mobile Holder</p>
         <p>Mobile Holders</p>
         <p>Mobile cases and covers</p>
   </div>
   <div className="smd" >
       <h3>Appliances</h3>
       <p>All Appliances</p>
       <p>Grooming</p>
       <p>Home Appliances</p>
   </div>
</div>
}
export default Electronics