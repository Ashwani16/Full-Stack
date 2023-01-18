import { useContext } from "react"
import { AuthContext } from "../context.js/AuthContext"

export default function Login(){
    const {login,isAuth}=useContext(AuthContext)
    console.log(isAuth)
    return <button disabled={isAuth} onClick={login}>log-in</button>
}