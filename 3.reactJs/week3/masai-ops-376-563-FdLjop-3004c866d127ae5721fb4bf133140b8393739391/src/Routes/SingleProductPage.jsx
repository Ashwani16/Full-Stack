import {useParams} from "react-router-dom"
import {useState,useEffect} from "react"
function SingleProductPage(){
    const [data,setData]=useState([])
    let {id}=useParams()
  useEffect(()=>{
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`)
    .then((res)=>{
      return res.json().then((res)=>{
        //console.log(res)
        setData(res.data)
      })
    })
  },[])
    
    console.log(data)
    return (
        <div data-testid="products-container">   
            <div>
                <h3 data-testid="product-brand">{data.brand}</h3>
            </div>
            <div >
            <img data-testid="product-image" width="200px" src={data.img} alt={data.brand}/>
            </div>
            <div data-testid="product-category">
                {data.category}
            </div>
           
            <div data-testid="product-details">
                
                {data.details}
            </div>
            <div data-testid="product-price">
                {data.price}
            </div>

            </div>
    )
}
export default SingleProductPage