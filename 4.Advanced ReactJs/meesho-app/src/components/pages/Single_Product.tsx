import { Divider } from "@chakra-ui/react"
import axios from "axios"
import { AiOutlineShoppingCart } from "react-icons/ai"
import {BiRightArrow} from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { Add_View_Product } from "../../redux/allProducts/action"
import { AddToCart } from "../../redux/cart/action"

const Single_Product=()=>{
    const {type,id}=useParams()
    const product =useSelector((state:any)=>{
        return state.productReducer.singleProduct
    })
    const navigate=useNavigate()
  
    const dispatch =useDispatch()
    
    
    if(Object.keys(product).length === 0){
        axios.get(`http://localhost:8080/${type}/${id}`).then((res)=>{
            dispatch(Add_View_Product(res.data))
        })
    }
const addToCartHandler=()=>{
    dispatch(AddToCart(product))
    
}
const buyNowHandler=()=>{
    dispatch(AddToCart(product))
    navigate("/address")
}
    return <div className="sigleProductCard">
            <div className="smallImage">
            <img src={product?.img1}/>    
            </div>
            <div className="bigImage">
            <img src={product?.img1}/> 
            <Divider /> 
                <div className="flex1">
                    <button onClick={addToCartHandler} className="button"><AiOutlineShoppingCart /> Add to Cart</button>
                    <button onClick={buyNowHandler} className="button pinkbutton"><BiRightArrow/> Buy Now</button>
                </div> 
                <Divider /> 
            </div>
            <div className="Single_Product_Details">
            <div className="left border descwidth"><p className='name'>{product?.name}</p>
        <h1 className="price">{product?.price}</h1>
        <div className='rating'><p >{product?.rating} ✩</p></div>
        <button className='freedel' disabled>Free Delivery</button>
        </div>
        <div className="left border descwidth">
            <h1 className=' price'>Select Size</h1>
            <div className='rating size'><p >small</p></div>
            <div className='rating size'><p >mediume</p></div>
            <div className='rating size'><p >large</p></div>
            <div className='rating size'><p >x-large</p></div>
        </div>
        <div className="left border descwidth">
            <h1 className=' price'>Product Details</h1>
            <p>Name :{product?.name}</p>
            <p>Fabric:Denim</p>
            <p>Surface Styling :Fringed</p>
            <p>Net Quantity (N):1</p>
            <p>Sizes:</p>
            {product?.size?.length>0&&product?.size.map((e:string,i:number)=>{
                return <p key={i}>{e}</p>
            })}
            <p>Desc.-</p>
            <p>{product?.desc}</p>
        </div>
            </div>
    </div>
}
export default Single_Product