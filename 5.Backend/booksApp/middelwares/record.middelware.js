const fs=require("fs")
function record(req,res,next){
    let m=req.method
    if(m==="POST"||m==="PATCH"||m==="DELETE"){
       try {
    fs.writeFileSync("./record.json",`The document with id:${req.params.id} has been ${m==="DELETE"?"deleted":updated}.`)

       } catch (error) {
        console.log("error in records file")
    }}
    
    
    next()
}
module.exports={record}