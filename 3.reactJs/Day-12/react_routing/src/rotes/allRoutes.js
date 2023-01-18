import { Routes,Route } from "react-router-dom";
import Products from "../components/products";
import ProductDetails from "../components/productDetails";
import Home from "../components/home";
import Login from "../components/login.js"
import PrivateRouter from "./PrivateRoute";
export default function AllRoutes(){
    return <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<PrivateRouter><Products/></PrivateRouter>}/>
          <Route path='/products/:id' element={<PrivateRouter><ProductDetails/></PrivateRouter>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="*" element={<h1>ERORR:404</h1>} />
        </Routes>
   
}