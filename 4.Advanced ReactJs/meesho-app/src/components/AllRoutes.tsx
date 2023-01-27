import {Routes,Route} from "react-router-dom"
import Address from "./pages/address"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import LogIn from "./pages/Login"
import Payment from "./pages/Payment"
import Products from "./pages/Products"
import SignUp from "./pages/SignUp"
import Single_Product from "./pages/Single_Product"
function Allroutes(){
    return <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products/:type" element={<Products/>}/>
      <Route path="/product/:type/:id" element={<Single_Product/>} />
      <Route path="/cart" element={<Cart/>} /> 
      <Route path="/address" element={<Address/>} />
      <Route path="/payment" element={<Payment/>} />
      <Route path="/login" element={<LogIn/>} />
      <Route path="/signUp" element={<SignUp/>} />
    </Routes>
}
export default Allroutes