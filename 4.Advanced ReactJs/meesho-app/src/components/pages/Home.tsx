import { ProductsBar } from "../ProductsBar"
import { Sidebar } from "../Sidebar"
import img1 from "../images/1.jpeg"
import img2 from "../images/2.jpeg"
import img3 from "../images/3.jpeg"
import img4 from "../images/4.jpeg"
import img5 from "../images/5.jpeg"
import img6 from "../images/6.jpeg"
const Home=()=>{
    return <div>
        <img className="homeImg" src={img1} alt="img1"/>
        <img className="homeImg" src={img2} alt="img2"/>
        <img className="homeImg" src={img3} alt="img3"/>
        <img className="homeImg" src={img4} alt="img4"/>
        <img className="homeImg" src={img5} alt="img5"/>
        <img className="homeImg" src={img6} alt="img6"/>
        <div className="flex">
            
        <Sidebar/>
        <ProductsBar/>
    </div>
    </div>
}
export default Home