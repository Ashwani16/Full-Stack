const express=require("express");
const {connection,ModelMovie} =require("./db")
const app=express();



app.listen(8080,async ()=>{
    try{
        await connection;
        console.log("server is coonected to database")
    }catch{
        console.log("can not connet to db")
    }
    console.log("sever is ruuning")
})