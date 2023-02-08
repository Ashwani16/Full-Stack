const {Router}=require("express");
const { BookModel } = require("../models/books.Model");

const bookRouter=Router();

bookRouter.get(`/`,async(req,res)=>{
    let {price_low,price_high,genre}=req.query;
    console.log(price_low,price_high)
    try {
        let data= await BookModel.find({price:{$gt:price_low?price_low:"",$lt:price_high?price_high:""},
            genre:genre?genre:""
            }).exec();
         res.send(data)
    } catch (error) {
        res.send("There are some error")
    }
})
bookRouter.post("/add",async(req,res)=>{
    let obj=req.body;
    try {
         data= new BookModel(obj)
         await data.save();
         res.send(data)
    } catch (error) {
        res.send("There are some error")
    }
})
bookRouter.patch(`/update/:id`,async(req,res)=>{
    let {id}=req.params;
    let obj=req.body;
    try {
         await BookModel.findByIdAndUpdate(id,obj)
         res.send("updated")
    } catch (error) {
        res.send("There are some error")
    }
})
bookRouter.delete(`/delete/:id`,async(req,res)=>{
    let {id}=req.params;
    try {
         await BookModel.findByIdAndDelete(id)
         res.send("deleted")
    } catch (error) {
        res.send("There are some error")
    }
})
bookRouter.put(`/replace/:id`,async(req,res)=>{
    
    let {id}=req.params;
    let obj=req.body;
    try {
         await BookModel.findOneAndReplace({_id:id},obj)
         res.send("replaced")
    } catch (error) {
        res.send("There are some error")
    }
})

module.exports={bookRouter}