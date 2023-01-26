import React from 'react'
import { OnlyProduct } from './OnlyProduct'
export type Objprop={
    image:string;
    name:string;
    Price:number;
    rating:number;
}
export const ProductsBar = () => {
    let arr=[1,1,1,1,1,1];
    let obj={
        image:"https://images.meesho.com/images/products/61634031/1cyvh_400.jpg",
        name:"Chanvi Supirior sarre",
        Price:203,
        rating:4.4
    }
  return (
    <div className='ProductsBar'>
        {
            arr.map((e)=>{
                return <OnlyProduct {...obj} />
            })
        }
       
        
    </div>
  )
}
