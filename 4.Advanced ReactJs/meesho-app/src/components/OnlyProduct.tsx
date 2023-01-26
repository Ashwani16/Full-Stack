import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Add_View_Product } from '../redux/allProducts/action'
import "./OnlyProduct.css"
import {Objprop} from "./ProductsBar"
interface OnlyProductProps extends Objprop{}
export const OnlyProduct = (product:OnlyProductProps) => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
const clickHandler=()=>{
    dispatch(Add_View_Product(product))
    navigate(`/product/${product.id}`)
}
    return (
    <div onClick={clickHandler} className='sp single'>
        <img  className='img' src={product.img1}/>
        <p className='name'>{product.name}</p>
        <h1 className="price">{product.price}</h1>
        <button className='freedel' disabled>Free Delivery</button>
        <div className='rating'><p >{product.rating} ✩</p></div>
    </div>
  )
}
