const {Router}=require("express");
const { TodoModel } = require("../model/todo.model");
const { UserModel } = require("../model/user.model");
const jwt=require("jsonwebtoken")

const listRouter=Router();

listRouter.get("/",async(req,res)=>{
    const {user_name,pass}=req.headers;

    try {
        const a=await UserModel.find({user_name,pass})
        if(a.length===0){
            res.end("Please Login first")
        }else{
            const data=await TodoModel.find();
            res.send("data")
        }
    } catch (error) {
        res.send("error in get list user")
    }
})
module.exports={listRouter}