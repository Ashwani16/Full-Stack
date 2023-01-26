
import {useState} from "react"

const Bags=()=>{
    const [isShown,setIsShown]=useState<Boolean>(false)
    return <div className="sm"> 
    <div className="smd" >
        <h3>Women Bags</h3>
        <p>All Women Bags</p>
         <p>Hanbags</p>
         <p>Clutches</p>
         <p>Slingbags</p>
   </div>
   <div className="smd" >
       <h3>Men Bags</h3>
       <p>All Men Bags</p>
       <p>Men Wallets</p>
   </div>
   <div className="smd" >
       <h3>Men Fotwear</h3>
       <p>Sports Shoes</p>
       <p>Casual Shoes</p>
       <p>Sandals</p>
   </div>
   <div className="smd" >
       <h3>Women Footwear</h3>
       <p>Flats</p>
       <p>Belliess</p>
       <p>Juttis</p>
   </div>
</div>
}
export default Bags