const express=require("express");
const app=express();

app.use((req,res,next)=>{
    
})
app.post("./movies",(req,res)=>{
    res.end("data recieved successfully")
})

app.listen("8080",()=>{
    console.log("server is running at port 8080");
})
