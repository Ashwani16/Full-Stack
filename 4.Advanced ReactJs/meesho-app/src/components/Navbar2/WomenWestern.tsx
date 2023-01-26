
import {useState} from "react"
import { Link } from "react-router-dom"

const WomenWestern=()=>{
    const [isShown,setIsShown]=useState<Boolean>(false)
    return <div className="sm"> 
    <div className="smd" >
        <h3>Topwear</h3>
        <Link to="/products/alltopwear"><p>Tops</p></Link>
        <Link to="/products/dresses"><p>Dresses</p></Link> 
        <Link to="/products/alltopwear"><p>Sweaters</p></Link>
        <Link to="/products/dresses"><p>Jumpsuits</p></Link>
   </div>
   <div className="smd" >
   <Link to="/products/alltopwear"><h3>Buttomwear</h3></Link> 
   <Link to="/products/alltopwear"><p>Jeans </p></Link> 
   <Link to="/products/alltopwear"><p>Jeggings</p></Link>
   <Link to="/products/dressesr"><p>Palazzos</p></Link>
   <Link to="/products/alltopwear"><p>Shorts</p></Link>
   <Link to="/products/alltopwear"><p>Skirts</p></Link>
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