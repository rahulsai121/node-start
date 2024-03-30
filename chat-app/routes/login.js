const express=require('express');

const router=express.Router();

router.get('/login',(req,res)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="POST"><input id="username" type="text" name"title"><button type="submit">add</button></form>')
})

module.exports=router;