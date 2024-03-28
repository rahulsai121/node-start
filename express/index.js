

const express=require('express');

const bodyParser = require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended:false}))

app.use('/add-product',(req,res)=>{
    res.send('<form action="/product" method="POST">Product name:<input type="text" name="title">Product size:<input type="number" name="size"><button type="submit">submit</button></form>')
})
app.post('/product',(req,res)=>{
    console.log(req.body)
    res.redirect('/');
})
app.use((req,res,next)=>{
    res.send('<h1>Hello from express</h1>')
})


app.listen(3000)