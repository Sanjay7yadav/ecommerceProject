const mongoose=require("mongoose");
const { default: Product } = require("../Product");

const notesSchema={
            Image:String,
            Category:String,
            product_name:String,
            product_Brand_Name:String,
            Price:Number,
            Stock:Number,
            Discription:String
}
const product=mongoose.model("Note",notesSchema);

module.exports=product;