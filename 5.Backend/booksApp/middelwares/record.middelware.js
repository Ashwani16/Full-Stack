const fs=require("fs")
async function record(req,res,next){
    let m=req.method
    // let (id)=req.params
    // console.log(id)
    if(m==="PUT"||m==="PATCH"||m==="DELETE"){
       try {
     await fs.writeFileSync("./record.txt",`The document with id:${req.param.id} has been ${m==="DELETE"?"deleted":"updated"}.\n`)

       } catch (error) {
        console.log("error in records file")
    }}
    
    
    next()
}
module.exports={record}