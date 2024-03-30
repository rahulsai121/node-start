const express=require('express');

const app=express()

const loginRoute=require('./routes/login')

const massageRoute=require('./routes/massage')

app.use(express.urlencoded({extended:false}))

app.use(massageRoute)


app.use(loginRoute)



app.listen(3000);
