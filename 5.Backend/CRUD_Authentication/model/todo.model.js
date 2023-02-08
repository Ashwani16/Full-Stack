const mongoose=require("mongoose")

const todo_Schema=mongoose.Schema({
    user_name:String,
    pass:Number
})
const TodoModel=mongoose.model("list",todo_Schema)

module.exports={TodoModel}