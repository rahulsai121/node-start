const path=require('path')
const express=require('express')

const route=express.Router();

route.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','login.html'))
})
route.post('/success',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','login-success.html'))
})


module.exports=route;