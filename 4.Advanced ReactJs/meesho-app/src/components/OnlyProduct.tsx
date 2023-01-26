import React from 'react'
import {Objprop} from "./ProductsBar"
interface OnlyProductProps extends Objprop{}
export const OnlyProduct = ({image,name,Price,rating}:OnlyProductProps) => {

    return (
    <div className='sp'>
        <img src={image}/>
        <p>{name}</p>
        <h1>{Price}</h1>
        <p>{rating}</p>
    </div>
  )
}
