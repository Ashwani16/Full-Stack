const express=require("express");
const multer=require("multer")
const cors =require("cors")
const upload=multer({ dest: 'uploads/' })

const app=express();
app.use(cors())
app.post("/upload", upload.single('avatar'),(req,res)=>{
    console.log(req.file)
    res.json({
        res:"submitted"
    })
})

app.listen("8080",()=>{
    console.log("server is running at port no:8080")
})