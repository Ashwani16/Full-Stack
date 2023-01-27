import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Address =()=>{
    const navigate=useNavigate()
    let toatalAmount=useSelector((state:any)=>{
        return state.cartReducer.toatal_Amount
      })
      let toatal_Count=useSelector((state:any)=>{
        return state.cartReducer.toatal_Count
      })
    const buttonHandler=()=>{
        navigate("/payment")
    }  
    return <div className="flex1 width60 spacebtw">
       <div className="border width65">
            <label>Contact Details</label><br/>
            <input className="input1" placeholder="Name"/><br/>
            <input className="input1" placeholder="Phone Number"/><br/>
            <label>Address</label><br/>
            <input className="input1" placeholder="House no. / Building Name."/><br/>
            <input className="input1" placeholder="Road Name/Area/Colony"/><br/>
            <input className="input1" placeholder="Pincode"/><br/>
            <input className="input1" placeholder="City"/>
            <input className="input1" placeholder="State"/><br/>
           <div className="marginTop continue"><button onClick={buttonHandler} >Save & Continue</button></div> 
       </div>
       
       <div className="width30">
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
           <div>
            <img src="https://images.meesho.com/images/marketing/1588578650850.webp"/>
           </div>
       </div>
    </div>
}
export default Address