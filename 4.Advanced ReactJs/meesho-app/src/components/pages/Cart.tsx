import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Objprop } from "../ProductsBar"
import SingleCartProduct from "./SingleCartProduct"

const Cart =()=>{
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

const submitHandler=()=>{
    navigate("/address")
}
// // cartList=[{
// //     "img1": "https://images.meesho.com/images/products/175747025/5ugld_400.jpg",
// //     "name": "Aakarsha Fashionable Sarees",
// //     "price": "₹315",
// //     "onwards": "onwards",
// //     "rating": 3.1,
// //     "reviews": "9 Reviews",
// //     "size": [
// //       "Free Size"
// //     ],
// //     "delivery": "Free Delivery",
// //     "desc": "Hello dear sir? Madam, all these original products have to be tied, you have to wash the normal water and the shampoo, and do not keep it soaked in water for a long time. These hands are tied, all the bandhani are small in the whole, you will roll presses them, then all the holes will be recovered",
// //     "id": "af948a69-4822-4756-a655-588256c1f878",
// //     "quantity": 1
// //   }]
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
           <div onClick={submitHandler} className="continue">
            <p>Continue</p>
           </div>
           <div>
            <img src="https://images.meesho.com/images/marketing/1588578650850.webp"/>
           </div>
        </div>

    </div>
}
export default Cart