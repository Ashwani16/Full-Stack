const fs=require("fs")
function logger(req,res,next){
    fs.appendFileSync("./logs.txt",`\n Method: ${req.method}, Route: ${req.url}, user-agent:${req.useragent.source}\n`)
    next();
}
module.exports=logger;