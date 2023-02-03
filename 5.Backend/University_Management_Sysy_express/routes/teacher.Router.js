const {Router}=require("express")

const teacherRoute=Router()

teacherRoute.post("/add",(req,res)=>{
    console.log(req.body)
    res.send("Teacher added")
})
teacherRoute.get("/",(req,res)=>{
    
    let data =fs.readFileSync("./db.json","utf-8")
    let teachers=JSON.parse(data)
    res.send(teachers.teachers)
})
teacherRoute.get("/:empid",(req,res)=>{
    const {empid}=req.params;
    let data =fs.readFileSync("./db.json","utf-8")
    const Pared_data=JSON.parse(data)
    Pared_data.teachers.forEach(element => {
        if(element.roll_no===+empid){
            res.send(element)
        }
    });
    res.send("Not Found")

})

module.exports=teacherRoute