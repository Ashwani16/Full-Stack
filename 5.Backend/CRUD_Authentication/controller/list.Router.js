const {Router}=require("express");
const { TodoModel } = require("../model/todo.model");
const { UserModel } = require("../model/user.model");

const listRouter=Router();

listRouter.get("/",async(req,res)=>{
    const user=req.header;
    console.log("user",user)
    try {
        const a=await UserModel.find(user)
        if(a.length===0){
            res.end("Please Login first")
        }else{
            const data=await TodoModel.find();
            res.send(data)
        }
    } catch (error) {
        res.send("error in get list user")
    }
})
module.exports={listRouter}