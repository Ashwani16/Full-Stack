const mongoose=require("mongoose")
async function main(){
    try {
        let connection=await mongoose.connect(`mongodb://127.0.0.1:27017/school`)
        console.log("connection stablish");
        await Studentmodel.insertMany([{
            name:"student1",
            age:"22",
            city:"city1"
        }])
        connection.disconnect()
        console.log("disconected")
    } catch (error) {
        console.log("can not start")
        console.log(error)
    }
}
main()
// structure of document
const studentSchema=mongoose.Schema({
    name:{type:String,required:true},
    age:Number,
    city:String
})
//creating model
const Studentmodel=mongoose.model("student",studentSchema)