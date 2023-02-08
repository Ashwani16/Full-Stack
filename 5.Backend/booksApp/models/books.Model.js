const mongoose=require("mongoose")

const bookSchema=mongoose.Schema({
    title:String,
    genre:String,
    price :Number,
    author: String,
    title : String,
    genre :String,
    price :Number,
    author: String,
})
const BookModel=mongoose.model("book",bookSchema)

module.exports={BookModel};