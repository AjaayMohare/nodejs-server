const express = require("express");
const app = express();
const PORT = 3000;

app.get('/' , (req,res)=>{
    res.end("homepage");
})

app.get('/about' , (req,res)=>{
    res.end("about page");
})

app.get('/contact' , (req,res)=>{
    res.end("contact page");
})

app.listen(PORT,()=>{
    console.log("server started");
    console.log("visit localhost:3000");
})

