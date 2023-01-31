const http=require("http")
const fs=require("fs")
const cowsay=require("cowsay") 

const server=http.createServer((req,res)=>{
     switch (req.url){
        case "/":{
            res.setHeader("Content-type","text/html");
            res.end("<h1>WELCOME TO EMPLOYEE MANAGEMENT SYSTEM</h1>");
            break;
        }
        case "/writeinfile":{
            fs.writeFile("employee.txt","Employee names are as follows:\n",(err)=>{
                if(!err){
                    res.setHeader("Content-type","text/html");
                    res.end("<h1>Data has been written in the file</h1>")
                }
            })
            break;
        }
        case "/enternames":{
            let names=["Aman", "Albert", "Varun", "Rajat", "Nrupul"];
            fs.appendFile("./employee.txt",names.join("\n"),(err)=>{
                if(!err){
                    res.end("<h1>All the names added in the file</h1>")
                }
            })
            break;
        }
        case "/alldetails":{
            fs.readFile("./employee.txt",{encoding:"utf-8"},(err,data)=>{
                if(err){
                    res.end("There are some error")
                }else{
                    res.end(cowsay.say({text:data}))
                }
            })
            break;
        }
        case "/address":{
            break;
        }
        case "/delete":{
            fs.rm("./employee.txt",(err)=>{
                if(err){
                    res.end("Some error in deleteing")
                }else{
                    res.end("<h1>File has been deleted</h1>")
                }
            })
            break;
        }
        default:{
            res.end("Not-Found")
            break;
        }
     }
})
server.listen("8080",()=>{
    console.log("server is running at 8080")
})

console.log(fs)
