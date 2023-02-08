const express=require("express");
const { connection } = require("./config/db");
const { listRouter } = require("./controller/list.Router");
const { loginRouter } = require("./controller/login.Router");
require('dotenv').config()
const app=express();
app.use(express.json())
app.use('/login',loginRouter);
app.use('/list',listRouter)
app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log(`server is running at port ${process.env.port}`)
    } catch (error) {
        console.log(`Error in starting server`)
    }
})