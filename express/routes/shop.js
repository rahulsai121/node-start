const path=require('path')

const express=require('express')

const productController=require('../controllers/products')
const route=express.Router()
route.get('/',productController.getProduct)


module.exports=route;