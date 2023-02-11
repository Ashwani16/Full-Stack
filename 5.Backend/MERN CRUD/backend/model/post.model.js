const mongoose=require("mongoose");

const post_Schema=mongoose.Schema({
    title:String,
    body:String,
    device:String
})
const PostModel=mongoose.model("post",post_Schema)