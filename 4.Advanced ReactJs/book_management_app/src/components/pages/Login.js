import { Box, Button, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { Login as login } from "../../redux/Auth/action"

export default function Login(){
    const location=useLocation()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const dispatch=useDispatch()
    const navigate=useNavigate()
    
    const clickHandler=()=>{
        let data={
            email,password
        }
        dispatch(login(data)).then((res)=>{
            navigate(`${location.state}`,{replace:true})
        })
    }
    
    return <div>
        <h1>Login page</h1>
        <div>
            <input placeholder="email" onChange={(e)=>{setEmail(e.target.value)}} type="text"/>
            <input placeholder="password" onChange={(e)=>{setPassword(e.target.value)}} type="password"/>
            <button onClick={clickHandler}>Login</button>
        </div>
        <Box maxW='sm' margin="auto" borderWidth='1px' borderRadius='lg' overflow='hidden'>
        
        <FormControl>
  <FormLabel>Login page</FormLabel>
  <FormHelperText>Enter EMAIL</FormHelperText>
  <Input  placeholder="email" onChange={(e)=>{setEmail(e.target.value)}} type="text"/>
  <FormHelperText>Enter PassWord</FormHelperText>
  <Input placeholder="password" onChange={(e)=>{setPassword(e.target.value)}} type="password"/>
  <Button onClick={clickHandler}>Login</Button>
</FormControl>
</Box>
    </div>
}