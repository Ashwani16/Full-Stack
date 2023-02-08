const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    user_name:String,
    pass:Number
})
const UserModel=mongoose.model("user",userSchema)

module.exports={UserModel}