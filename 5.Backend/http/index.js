const http=require("http")
const fs=require("fs")
const os=require("os")

const homedir=os.homedir()
console.log(homedir)

const server=http.createServer((req,res)=>{
    //console.log("->",req.url)
    //console.log(req.url)
    fs.readdir(`${homedir}${req.url}`,(err,ls)=>{
        if(err){
            console.log("-><",err)
            res.end("This is not a directory or there is nothing")
            
        }else{
            let data=ls.map((e)=>{
                return `<a href="${req.url}${e}/">${e}</a>`
            })
            console.log(data)
            res.end(data.join(" "))
        }
       
        
    })
    
})
server.listen("8080",()=>{
    console.log("server run succefully at port 8080")
})
// fs.readdir("../../../../../../",(err,ls)=>{
//         if(err){
//             console.log("err: ",err)
//         }else{
//             console.log("succed",ls)
//         }
// })
//console.log(fs)