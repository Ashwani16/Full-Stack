
import {useState} from "react"

const WomenWestern=()=>{
    const [isShown,setIsShown]=useState<Boolean>(false)
    return <div className="sm"> 
    <div className="smd" >
        <h3>Topwear</h3>
        <p>Tops</p>
         <p>Dresses</p>
         <p>Sweaters</p>
        <p>Jumpsuits</p>
   </div>
   <div className="smd" >
       <h3>Buttomwear</h3>
       <p>Jeans </p>
       <p>Jeggings</p>
       <p>Palazzos</p>
       <p>Shorts</p>
       <p>Skirts</p>
   </div>

   <div className="smd" >
       <h3>Sleepwear</h3>
       <p>Nightsuits</p>
       <p>Babydolls</p>
       <p>Embroidered Suits</p>
       <p>Chaneri Suits</p>
       <p>Embroidered Kurtis</p>
   </div>
</div>
}
export default WomenWestern