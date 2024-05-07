const express=require('express')

const cors=require('cors')

const userRoute=require('./routes/user')

const sequelize=require('./utility/database')
const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/user',userRoute)


sequelize.sync()
.then(result=>{
    app.listen(3000,()=>{
        console.log('server is running on 3000')
    })
})
.catch(err=>console.log(err))

