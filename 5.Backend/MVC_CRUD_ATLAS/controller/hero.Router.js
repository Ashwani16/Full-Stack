const {Router}=require("express");
const { Heromodel } = require("../model/hero.model");

const heroRouter=Router();

heroRouter.get("/",async (req,res)=>{
    try {
        const heros= await Heromodel.find()
        res.send(heros)
    } catch (error) {
        res.send("Some error in getting heroes")
    }
   
   
})
heroRouter.post("/add",async(req,res)=>{
    try {
        const obj=req.body; 
    let hero=new Heromodel(obj)
    await hero.save()
    res.send("hero details posted")
    } catch (error) {
        res.send("some erroe in posting heroes")
    }
    
})
heroRouter.patch("/update/:id",async (req,res)=>{
   try {
    const {id}=req.params;
    await Heromodel.findByIdAndUpdate(id,req.body)
    res.send("Updated")
   } catch (error) {
    res.send("Some problemin updation")
   }
 
})
heroRouter.delete("/delete/:id",async (req,res)=>{
    try {
     const {id}=req.params;
     await Heromodel.findByIdAndDelete(id,)
     res.send("Updated")
    } catch (error) {
     res.send("Some problemin updation")
    }
  
 })

module.exports={heroRouter}