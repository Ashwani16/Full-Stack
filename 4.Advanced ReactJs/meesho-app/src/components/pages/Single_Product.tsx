import { useSelector } from "react-redux"

const Single_Product=()=>{
    const product =useSelector((state:any)=>{
        return state.productReducer.singleProduct
    })
console.log(product)
    return <div>
            
    </div>
}
export default Single_Product