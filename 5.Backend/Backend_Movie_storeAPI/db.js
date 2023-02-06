const mongoose=require("mongoose");
const connection=mongoose.connect(`mongodb://127.0.0.1:27017/movei`)

const moviesSchema=mongoose.Schema({
    title:String,
    director:String,
    rating:Number,
    genres:String
})
const MoviesModel=mongoose.model("movieList",moviesSchema)
module.exports={connection,MoviesModel}