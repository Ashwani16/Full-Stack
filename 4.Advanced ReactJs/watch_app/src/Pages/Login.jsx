import React, { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginApi } from "../Redux/AuthReducer/action";

const Login = () => {
  const location=useLocation()
  const navigate=useNavigate()
  const [email,setEmail]=useState("")
  const [password,setPass]=useState("")
  const dispatch=useDispatch()
const clickHandler=(e)=>{
  e.preventDefault()
  let obj={
    email,password
  }
  dispatch(LoginApi(obj)).then(()=>{
    console.log(location.state)
    navigate(location.state)
  })
}
  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={clickHandler}>
        <div>
          <label>User Email</label>
          <br />
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} data-testid="login-email" />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input value={password} onChange={(e)=>{setPass(e.target.value)}} data-testid="login-password" />
        </div>
        <button  type="submit" data-testid="login-submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Login;
