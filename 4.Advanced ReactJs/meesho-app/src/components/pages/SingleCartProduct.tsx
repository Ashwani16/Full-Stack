import { Divider } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { AddToCart, DecrementCartCount, RemoveFromCart } from "../../redux/cart/action"
import { Objprop } from "../ProductsBar"

const SingleCartProduct=(product:Objprop)=>{
    const dispatch=useDispatch()
const addHandler=()=>{
    dispatch(AddToCart(product))
}
const removeHandler=()=>{
    dispatch(RemoveFromCart(product))
}
const decrementHandler=()=>{
    dispatch(DecrementCartCount(product))
}
    return <div >
            <div className="singlecart border">
            <div className="imgdiv"><img src={product.img1}/></div>
            <div className="detaildiv">
                <p className="h1">{product.name}</p>
                <p>Size:Mediume - Qty- <button onClick={decrementHandler} disabled={product.quantity<=1} className="border">-</button>{product.quantity}<button onClick={addHandler} className="border">+</button></p>
                <p>{product.price} with 10% off </p>
                <button onClick={removeHandler} className="pink bold2">X REMOVE</button>
            </div>
            <div className="pink bold1 ">Edit</div>
            </div> 
            <div className="flex spacebtw">
                <p>Sypplier: Jakya Fashion </p>
                <p>{product.delivery}</p>
            </div>
            <Divider/>
            
    </div>
}
export default SingleCartProduct