import { Divider } from "@chakra-ui/react"
import { Objprop } from "../ProductsBar"

const SingleCartProduct=(product:Objprop)=>{
console.log(product)
    return <div >
            <div className="singlecart border">
            <div className="imgdiv"><img src={product.img1}/></div>
            <div className="detaildiv">
                <p className="h1">{product.name}</p>
                <p>Size:Mediume - Qty-{product.quantity}</p>
                <p>{product.price} with 10% off </p>
                <button className="pink bold2">X REMOVE</button>
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