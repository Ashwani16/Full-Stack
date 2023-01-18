import Navbar from "../Navbar";
import SideBar from "../SideBar";
import style from "../../style/books.module.css"
import ShowBooks from "../ShowBooks";
export default function Books(){
    return <div>
        <Navbar/>
        <div className={style.body}>
            <SideBar/>
            <ShowBooks/>
        </div>
        
    </div>
}