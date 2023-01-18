import { Route, Routes } from "react-router-dom";
import Books from "./pages/Books";
import SingleBook from "./pages/SingleBook";
import EditBook from "./pages/EditBook"
import Login from "./pages/Login";
import PrivateRoute from "./PrivateRoute";

export default function AllRouters(){

    return <Routes>
        
                <Route path="/" element={<Books />} />
                <Route path="/books/:id" element={<PrivateRoute><SingleBook /></PrivateRoute>} />
                <Route path="/books/:id/edit" element={<PrivateRoute><EditBook/></PrivateRoute>} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>

}