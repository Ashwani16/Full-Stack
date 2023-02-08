const {Router} =require("express");
const { UserModel } = require("../model/user.model");

const loginRouter=Router();

loginRouter.post("/",async(req,res)=>{
    let obj=req.body;
    try {
        const user=new UserModel(obj)
        await user.save();
        res.send("logedin")
    } catch (error) {
        res.send("some error in login")
    }
})

module.exports={loginRouter}