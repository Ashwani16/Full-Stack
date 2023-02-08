const {Router}=require("express");
const { BookModel } = require("../models/books.Model");

const bookRouter=Router();

bookRouter.get(`/`,async(req,res)=>{
    try {
        let data= await BookModel.find()
         res.send(data)
    } catch (error) {
        res.send("There are some error")
    }
})
bookRouter.post(`/add`,async(req,res)=>{
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
         BookModel.findByIdAndUpdate(id,obj)
         res.send(data)
    } catch (error) {
        res.send("There are some error")
    }
})
bookRouter.delete(`/delete/:id`,async(req,res)=>{
    let {id}=req.params;
    try {
         BookModel.findByIdAndDelete(id)
         res.send(data)
    } catch (error) {
        res.send("There are some error")
    }
})
bookRouter.post(`/replace/:id`,async(req,res)=>{
    let {id}=req.params;
    let obj=req.body;
    try {
         BookModel.findOneAndReplace({_id:id},obj)
         res.send(data)
    } catch (error) {
        res.send("There are some error")
    }
})
