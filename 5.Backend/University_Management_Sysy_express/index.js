const express=require("express")
var useragent = require('express-useragent');

const studentRoute = require("./routes/student.Router")
const teacherRoute = require("./routes/teacher.Router")
const logger=require("./middelewares/logger.middeleware")
const validator = require("./middelewares/validator.middleware")

const app=express()
app.use(express.json())
app.use(useragent.express());
app.use(logger)
app.use(validator)
app.use("/student",studentRoute)
app.use("/teacher",teacherRoute)

app.listen("8080",()=>{
    console.log("Server is running at port 8080")
})