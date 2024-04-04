
const express=require('express')

const contactusController=require('../controllers/contactus')

const route=express.Router();

route.get('/',contactusController.getContactUs)
route.post('/success',contactusController.postSuccess)


module.exports=route;