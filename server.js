const { response } = require('express');
const express =require('express')
const app=express();
app.get("/",function(req,res){
res.sendFile("./ram.html",{root__dirname});
})
app.listen(8906);
console.log("running");