const mongoose=require("mongoose");
const Schema=mongoose.Schema;



const listingSchema=new Schema({
title:{
    type:String,
    required:true,
},
description:String,
image:{
    type:String,
    // set:(v)===""?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQBwXiG0Mxc9wwC39A148WLPxApLwTy7Hx3w&s":v,
},
price:Number,
location:String,
country:String,
});


const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;