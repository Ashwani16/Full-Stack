const {Router} =require("express");
const { UserModel } = require("../model/user.model");
const jwt=require("jsonwebtoken")

const loginRouter=Router();

loginRouter.post("/",async(req,res)=>{
    let {user_name,pass}=req.headers;
    
    try {
        const user=new UserModel({user_name,pass})
        await user.save();
        res.send("loged in")
    } catch (error) {
        res.send("some error in login")
    }
})

module.exports={loginRouter}