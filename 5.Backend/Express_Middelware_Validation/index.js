const express=require("express");
const app=express();
app.use(express.json())
app.use((req,res,next)=>{
    let data=req.body;
    if(typeof data.id ==="number"&&typeof data.name==="string" &&typeof data.rating ==="number"&&typeof data.desc==="string"&&typeof data.genre==="string"&& Array.isArray(data.cast)){
        next();
    }
    else{
        res.sendStatus(400);
    }
    
})
app.post("/movies",(req,res)=>{
    res.end("data recieved successfully")
})

app.listen("8080",()=>{
    console.log("server is running at port 8080");
})
