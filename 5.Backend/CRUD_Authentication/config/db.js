const mongoose=require("mongoose")
require('dotenv').config()

const connection=mongoose.createConnection(process.env.mongoUrl)
module.exports={connection}