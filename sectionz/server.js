const express = require("express");

const app=express();
const port= 8080;
app.get("/",(req,res)=>{
    res.end("welcome to express.js");

})

app.get("/view",(req,res)=>{
    res.end("welcome to the view port");

})

app.listen(port,()=>{
    console.log(`server is up ${port}`);
})