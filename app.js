const express=require("express");
const app=express();
const mongoose=require("mongoose");
 const mongooseUrl="mongodb://127.0.0.1:27017/test/wanderlust";
const Listing=require("./models/listing.js")

 main().then(()=>{
    console.log("connected to db")
 }).catch((err)=>{
    console.log(err);
 })

async function main(){
    await mongoose.connect(mongooseUrl)
}

app.get("/",(req,res)=>{
    res.send("I am root folder");
})


app.get("/testListing",(req,res)=>{
    let simpleListing=new Listing({
    title:"My New villa",
    description:"By the beach",
    price:1200,
    location:"calangute,Goa",
    country:"India",
    })
      simpleListing.save();
    console.log("sample was saved");
    res.send(`successful testing,${simpleListing}`)
})
app.listen(8080,()=>{
    console.log("port is listen");
})