const express=require("express");
require('dotenv').config()
const { connection } = require("./config/db");
const { bookRouter } = require("./controller/book.Router");
const { record } = require("./middelwares/record.middelware");
const { validator } = require("./middelwares/validator.middelware");

const app=express();
app.use(express.json());
app.use(validator)
app.use('/book/:delete/:id',record)
app.use("/book",bookRouter);


app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log(`Server is started on ${process.env.port} with mongoose`)
    } catch (error) {
        console.log("there are some error in mogoose")
    }
})