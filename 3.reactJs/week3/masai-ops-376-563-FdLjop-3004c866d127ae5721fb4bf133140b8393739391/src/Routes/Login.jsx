import { useContext, useState } from "react"
import {Link, Navigate} from "react-router-dom"
import { AuthContext } from "../Context/AuthContext";
function Login() {
  const {setToken,login} =useContext(AuthContext)
 
  const [isAuth,user,setUser]=useState({email:"",password:""})
  const {email,password}=user;
 if(isAuth)
 return <Navigate to="/dashboard"/>
function changeHandler(e){
  console.log(e.target.name);
  console.log(e.target.value);
  setUser({...user,[e.target.name]:e.target.value})
}  
function submitHandler(e){
  e.preventDefault()

  console.log(user)
  fetch(`https://reqres.in/api/login`,{
    method:"POST",
      body:JSON.stringify(user),
      headers:{
          'Content-Type':"application/json"
      }
  }).then((res=>{
    res.json().then((res)=>{
      login()
      setToken(res.token)
      
      //console.log(res)
    })
  }))
}
  return (
    <div>
      <form onSubmit={submitHandler} data-testid="login-form">
        <div>
          <label>
            Email
            <input  onChange={(e)=>{  changeHandler(e)}} name="email" data-testid="email-input" type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={(e)=>{  changeHandler(e)}}
            name="password"
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
