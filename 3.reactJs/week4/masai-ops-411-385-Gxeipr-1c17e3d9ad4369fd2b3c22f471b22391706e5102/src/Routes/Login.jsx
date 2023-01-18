import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
const {isAuth,setIsAuth,setToken}=useContext(AuthContext)
if(isAuth){return <Navigate to="/dashboard"/>}

function login(e){
  e.preventDefault()
  fetch(`https://reqres.in/api/login`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email,password})
  }).then((res)=>{
    res.json().then((res)=>{
      setIsAuth(true)
      setToken(res)
    })
  })
}

  return (
    <div className="login-page">
      <form className="form" data-testid="login-form">
        <div>
          <label>
            <input onChange={(e)=>{setEmail(e.target.value)}} data-testid="email-input" type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            <input
            onChange={(e)=>{setPassword(e.target.value)}}
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <button onClick={login} data-testid="form-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;
