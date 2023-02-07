const express=require("express");
const { heroRouter } = require("./controller/hero.Router");
require('dotenv').config()
const {connection}=require("./config/db")

const app=express();
app.use(express.json());

app.use("/hero",heroRouter)

app.listen(process.env.port,async()=>{
    try {
       await connection;
        console.log("server is running at "+process.env.port+" and connected with mongo")

    } catch (error) {
        
    }
})