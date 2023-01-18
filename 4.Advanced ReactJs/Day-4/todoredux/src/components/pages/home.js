import {Link} from "react-router-dom"
export default function Home(){
    return <div>
        <h1>Home</h1>
        <Link to="/todo/">Item page</Link><br/>
        <Link to="/login/">Log-in page</Link>
      

    </div>
}