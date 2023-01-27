import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Objprop } from "../ProductsBar"
import SingleCartProduct from "./SingleCartProduct"
import {useState} from "react"
import { Alert, AlertIcon, CircularProgress } from "@chakra-ui/react"
const Payment=()=>{
    const navigate=useNavigate()
    let cartList=useSelector((state:any)=>{
        return state.cartReducer.cart
      })
      let toatalAmount=useSelector((state:any)=>{
        return state.cartReducer.toatal_Amount
      })
      let toatal_Count=useSelector((state:any)=>{
        return state.cartReducer.toatal_Count
      })
const [succesfull,setSuccessfull]=useState(false)
const [loading,setloading]=useState(false)
const submitHandler=()=>{
    setloading(true)
    setTimeout(()=>{
        setSuccessfull(true)
        
    },2000)
  
    
}
    return <div className="cart">
    <div className="cps">
        <div><p>Cart | {cartList.length} Items</p></div>
        <div>
            {cartList.length>0 && cartList.map((e:Objprop)=>{
                return <SingleCartProduct key={e.id} {...e} />
            }) }
        </div>
    </div>
    <div>
    <div className="spacebtw flex">
            <p className="bold">Price Details</p>
        </div>
        <div className="spacebtw flex">
            <p>
                Toatal Product Price
            </p>
            <p>
            ₹{toatalAmount+50*toatal_Count}
            </p>
        </div>
        <div className="spacebtw flex">
            <p>
                Toatal Discount
            </p>
            <p>
                -₹{50*toatal_Count}
            </p>
        </div>
        <div className="spacebtw flex">
            <p>
                Order Total
            </p>
            <p>
            ₹{toatalAmount}
            </p>
        </div>
       <div className="yeh">
        <p>Yah! Your total discount is ₹{50*toatal_Count} </p>
       </div>
       <div className="clinking">
        <p>Clicking on "Continue" will not deduct any money"</p>
       </div>
       
       {succesfull?<Alert status='success'>
    <AlertIcon />
   Successfully Ordered!!
  </Alert>:<div onClick={submitHandler} className="continue">
        <p>{loading?<CircularProgress isIndeterminate color='green.300' />:"Pay"}</p>
       </div>}
       <div>
        <img src="https://images.meesho.com/images/marketing/1588578650850.webp"/>
       </div>
    </div>

</div>
}
export default Payment