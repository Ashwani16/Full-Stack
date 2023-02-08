const express=require("express");
const { connection } = require("./config/db");

const app=express();
app.use(express.json());
app.use("/book")


app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log(`Server is started on ${process.env.port} with mongoose`)
    } catch (error) {
        console.log("there are some error in mogoose")
    }
})