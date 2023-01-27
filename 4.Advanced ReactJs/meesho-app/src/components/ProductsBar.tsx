import { Console } from 'console';
import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { useLocation, useParams } from 'react-router';
import { Get_Data_from_API } from '../redux/allProducts/action';
import { OnlyProduct } from './OnlyProduct'
export type Objprop={
    delivery:string
    desc:string
    id:string
    img1:string
    name:string
    onwards:string
    price:string
    quantity:number
    rating:number
    reviews:string;
    size:any;
    writable:true;
}
export const ProductsBar = () => {
    const dispatch=useDispatch()
    const products:any=useSelector((state:any)=>{
        return state.productReducer.products
    })
    const {type}=useParams()
    const location=useLocation()
    useEffect(()=>{
       // dispatch({type: 'GET_PRODUCTS_RESPONSE_SUCCESS', payload: Array(64)})
       
        dispatch(Get_Data_from_API(type))
    },[location])
    //console.log(location)
  return (
    <div className='ProductsBar'>
        {
            products?.map((e:Objprop)=>{
                return <OnlyProduct key={e.id} {...e} />
            })
        }
       
        
    </div>
  )
}
