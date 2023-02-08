const { models } = require("mongoose");

function validator(req,res,next){
    let check=true;
    let obj=req.body
    if(req.method!="POST"){
    next();
    }else{
    // {
  
    //     "title" : "title 1",
    //     "genre" :"genres1",
    //     "price" :4,
    //     "author": "autho1"
    // }
     let info=["title", "price", "genre","author"]
     info.forEach((e)=>{
        if(!obj.hasOwnProperty(e)){
            console.log("validator-- ",e,obj)
            check=false
        }
        
     })
    if(check){
    next()}else{
    res.json({
        "err": "All the fields are not there"
        }) }
    }
}
module.exports={validator}