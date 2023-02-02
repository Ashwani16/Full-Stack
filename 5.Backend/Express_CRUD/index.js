const express=require("express");
const fs=require("fs")

const app=express();
app.use(express.json())

app.get("/",(req,res)=>{
    const data=fs.readFileSync("./db.json","utf-8")
    res.send(data)
})
app.post("/",(req,res)=>{
    let obj=req.body
    const data=fs.readFileSync("./db.json","utf-8")
    let parsed_Data=JSON.parse(data)
    parsed_Data.students.push(obj)
    fs.writeFile("./db.json",JSON.stringify(parsed_Data),(err)=>{
        if(err){
            console.log("err")
        }
    })
    res.send("data has posted")
})
app.delete("/",(req,res)=>{
    let name=req.body;
    const data=fs.readFileSync("./db.json","utf-8")
    let parsed_Data=JSON.parse(data);
    parsed_Data.students=parsed_Data.students.filter((e)=>e.name!=name.name)
    fs.writeFile("./db.json",JSON.stringify(parsed_Data),(err)=>{
        if(err){
            console.log("err")
        }
    })
    res.send("data has deleted")
})
app.put("/",(req,res)=>{
    let name=req.body;
    const data=fs.readFileSync("./db.json","utf-8")
    let parsed_Data=JSON.parse(data);
    parsed_Data.students=parsed_Data.students.filter((e)=>e.name!=name.name)
    parsed_Data.students.push(name)
    fs.writeFile("./db.json",JSON.stringify(parsed_Data),(err)=>{
        if(err){
            console.log("err")
        }
    })
    res.send("data has updated")
})


app.listen("8080",()=>{
    console.log("server has been run on port 8080");
})
