const {Router}=require("express")
const fs=require("fs")
const studentRoute=Router()

studentRoute.post("/add",(req,res)=>{
    console.log(req.body)
    res.send("Student added")
}) 
studentRoute.get("/",(req,res)=>{
    
    let data =fs.readFileSync("./db.json","utf-8")
    let student=JSON.parse(data)
    res.send(student.students)
})
studentRoute.get("/:rollno",(req,res)=>{
    const {rollno}=req.params;
    let data =fs.readFileSync("./db.json","utf-8")
    const Pared_data=JSON.parse(data)
    Pared_data.students.forEach(element => {
        if(element.roll_no===+rollno){
            res.send(element)
        }
    });
    res.send("Not Found")
})
studentRoute.patch("/:rollno",(req,res)=>{
    const data_for_update=req.body;
    const {rollno}=req.params;
    let data =fs.readFileSync("./db.json","utf-8")
    const Pared_data=JSON.parse(data)
    Pared_data.students.forEach(element => {
        if(element.roll_no===+rollno){
            Object.keys(element).forEach(key => {
                if(data_for_update[key]){
                    element[key]=data_for_update[key]
                }
              });
          fs.writeFileSync("./db.json",JSON.stringify(Pared_data))
        }
    });
  
    res.send("Updated")
})

studentRoute.delete("/:rollno",(req,res)=>{
    const data_for_update=req.body;
    const {rollno}=req.params;
    let data =fs.readFileSync("./db.json","utf-8")
    const Pared_data=JSON.parse(data)
    Pared_data.students=Pared_data.students.filter((e)=>{
        return e.roll_no!=+rollno
    })
    fs.writeFileSync("./db.json",JSON.stringify(Pared_data))
    res.send("Deleted")
})

module.exports=studentRoute