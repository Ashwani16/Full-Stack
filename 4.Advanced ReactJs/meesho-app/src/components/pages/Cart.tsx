import { useSelector } from "react-redux"

const Cart =()=>{
    const cartList=useSelector((state:any)=>{
        return state.cartReducer.cart
    })
    console.log(cartList)
    return <div>
        Cart Page
    </div>
}
export default Cart