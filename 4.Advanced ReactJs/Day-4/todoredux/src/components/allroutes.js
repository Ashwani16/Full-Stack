import {Routes,Route} from "react-router-dom"
import Edit from "./pages/edit"
import Home from "./pages/home"
import Login from "./pages/Login"
import Item from "./pages/todo"
import PrivateRouters from "./PrivateRouter"
export default function Allroute(){
    return <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login/" element={<Login/>} />
        <Route path="/todo/" element={<PrivateRouters><Item/></PrivateRouters>} />
        <Route path="/todo/:id/edit" element={<PrivateRouters><Edit/></PrivateRouters>} />

    </Routes>
}