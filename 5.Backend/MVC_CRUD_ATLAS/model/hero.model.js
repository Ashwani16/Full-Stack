const mongoose=require("mongoose");

const heroSchema=mongoose.Schema({
    name:String,
    gender:String,
    rank:Number,
    power:Number
})
const Heromodel=mongoose.model("heroe",heroSchema);

module.exports={Heromodel}