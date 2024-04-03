

const express=require('express');
const path=require('path')

const adminRoute=require('./routes/admin');
const shopRoute=require('./routes/shop')
const contactusRoute=require('./routes/contactus.js');
const bodyParser = require('body-parser');

const app=express();


app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoute)
app.use('/contactus',contactusRoute)
app.use(shopRoute)


app.use((req,res)=>{
    res.status(404).send(path.join(__dirname,'../','views','404.html'))
})




app.listen(3000)