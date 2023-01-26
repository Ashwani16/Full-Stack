import { ProductsBar } from "../ProductsBar"
import { Sidebar } from "../Sidebar"

const Products =()=>{
    return <div className="flex">
        <Sidebar/>
        <ProductsBar/>
    </div>
}
export default Products