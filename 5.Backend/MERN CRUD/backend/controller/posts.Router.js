const {Router}=require("express");
const { PostModel } = require("../model/post.model");
const { UserModel } = require("../model/user.model");
require('dotenv').config();
var jwt = require('jsonwebtoken');
const postRouter=Router();

const authentication=async (req,res,next)=>{
    try {
        const token=req.headers.token;
    var {name} = jwt.verify(token, process.env.secretkey);
    await PostModel.findOne({name})
    if(name){
        req.body.name=name;
        console.log("verify")
        next()
    }
    } catch (error) {
        res.send("Please Athonticate")
    }
    
}
postRouter.get("/",authentication,(req,res)=>{
    res.send("posts")
})

module.exports={postRouter}