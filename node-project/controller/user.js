
const { where } = require('sequelize')
const User=require('../model/user')
exports.postAddUser=(req,res)=>{
    //console.log(req.body.username);
    //console.log(req.body.email);
    //console.log(req.body.phone);
    User.create({
        username:req.body.username,
        email:req.body.email,
        phonenumber:req.body.phonenumber
    })
    .then(result=>{
        //console.log(result)
        res.status(201).json({newUser:result})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error:err})
    })
}

exports.getUsers= async (req,res)=>{
    const users=await User.findAll()
    //console.log(users)
    res.status(200).json({allUsers:users})
}

exports.deleteUser=async (req,res)=>{
    const paramId=req.params.id;
    const user=await User.destroy({where:{id:paramId}})
    //console.log('okok',paramId)
}

exports.updateUser=async(req,res)=>{
    const paramId=req.params.id;
    const user=await User.findAll({where:{id:paramId}})
    res.json({userDetails:user})
}