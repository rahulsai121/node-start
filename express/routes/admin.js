const express=require('express')

const route=express.Router();


route.get('/add-product',(req,res)=>{
    res.send('<form action="/admin/product" method="POST">Product name:<input type="text" name="title">Product size:<input type="number" name="size"><button type="submit">submit</button></form>')
})
route.post('/product',(req,res)=>{
    console.log(req.body)
    res.redirect('/');
})

module.exports=route;