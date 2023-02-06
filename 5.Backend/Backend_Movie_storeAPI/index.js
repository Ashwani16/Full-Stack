const express=require("express");
const { reset } = require("nodemon");
const {connection,MoviesModel} =require("./db");

const app=express();

app.use(express.json())
app.get("/movie",async (req,res)=>{
    let query=req.query
    console.log(query)
    try {
        let list=await MoviesModel.find(query)
        res.send(list)
    } catch (error) {
        res.send("There are some error please try after some time")
        console.log("ERROR")
        console.log(error)
    }
})
app.post("/movie",async(req,res)=>{
    const data=(req.body)
    let movie=new MoviesModel(data)
    try {
        await movie.save()
        res.send("Movie posted")
    } catch (error) {
        console.log("Err")
        console.log(error)
        res.send("Try Again There Are some error")
    }
})
app.delete("/movie/:id",async(req,res)=>{
    const {id}=req.params
    try {
        await MoviesModel.remove({_id:id})
        res.send("Deleted Succesfully")
    } catch (error) {
        console.log("ERROR \n",error)
        res.send("there are some error")
    }
})
app.patch("/movie/:id",async(req,res)=>{
    const data=(req.body)
    const {id}=req.params
    try {
        await MoviesModel.findByIdAndUpdate(id,data)
        res.send("Updated Succesfully")
    } catch (error) {
        console.log("ERROR \n",error)
        res.send("there are some error")
    }
})

app.listen(8080,async ()=>{
    try{
        await connection;
        console.log("server is coonected to database")
    }catch{
        console.log("can not connet to db")
    }
    console.log("sever is ruuning")
})