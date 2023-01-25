
import {useState} from "react"

const Jewellery=()=>{
    const [isShown,setIsShown]=useState<Boolean>(false)
    return <div className="sm"> 
    <div className="smd" >
        <h3>Jewellery</h3>
        <p>Jewellery Set</p>
         <p>Earrings</p>
         <p>Mangalsutras</p>
         <p>Studs</p>
         <p>Bangles</p>
         <p>Necklaces</p>
         <p>Rings</p>
   </div>
   <div className="smd" >
       <h3>Women Accessory</h3>
       <p>Bags</p>
       <p>Watches</p>
       <p>Hair Accessories</p>
       <p>Sunglasses</p>
       <p>Socks</p>
   </div>
</div>
}
export default Jewellery